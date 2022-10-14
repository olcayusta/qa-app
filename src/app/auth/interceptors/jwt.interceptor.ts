import { inject } from '@angular/core';
import {
  HttpRequest, HttpEvent, HttpHandlerFn
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { environment } from '@environments/environment';

export function jwtInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService);

  /*    if (req.context.get(BYPASS_LOG)) {
  return next.handle(req);
}*/

  const currentUser = authService.userValue;
  const isLoggedIn = currentUser && currentUser.token;
  const isApiUrl = req.url.startsWith(environment.apiUrl);
  if (isLoggedIn && isApiUrl) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${currentUser.token}`
      }
    });
  }

  return next(req);
}
