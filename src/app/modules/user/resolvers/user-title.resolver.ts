import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '@shared/models/user.model';
import { environment } from '@environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserTitleResolver implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    const { user } = <{ user: User }>route.parent?.data;
    return of(`${user.displayName} - ${environment.appTitle}`);
  }
}
