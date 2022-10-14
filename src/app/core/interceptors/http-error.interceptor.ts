import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpContextToken, HttpHandlerFn
} from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

export const BYPASS_ERROR = new HttpContextToken(() => false);

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  private router = inject(Router);


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.context.get(BYPASS_ERROR)) {
      return next.handle(request);
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.router.navigateByUrl('404', {
            replaceUrl: true,
            skipLocationChange: true
          });
        }

        if (error.status === 500) {
          this.router.navigateByUrl('500', {
            replaceUrl: true,
            skipLocationChange: true
          });
        }
        return EMPTY;
      })
    );
  }
}

export function errorInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const router = inject(Router);

  if (req.context.has(BYPASS_ERROR)) {
    return next(req);
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
        router.navigateByUrl('404', {
          replaceUrl: true,
          skipLocationChange: true
        });
      }

      if (error.status === 500) {
        router.navigateByUrl('500', {
          replaceUrl: true,
          skipLocationChange: true
        });
      }
      return EMPTY;
    })
  );
}
