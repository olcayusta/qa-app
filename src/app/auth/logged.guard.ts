import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = segments[0].path;

    if (!this.authService.getToken('token')) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    return this.router.parseUrl('/');
  }
}
