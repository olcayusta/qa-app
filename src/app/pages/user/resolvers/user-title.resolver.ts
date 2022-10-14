import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserTitleResolver implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    const { user } = route.parent?.data as { user: User };
    return of(user.displayName);
  }
}

export const userTitleResolverFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> => {
  const { user } = route.parent?.data as { user: User };
  return of(user.displayName);
};
