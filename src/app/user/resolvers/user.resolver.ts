import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { User } from '@shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> {
    const userId = Number(route.paramMap.get('userId'));
    return this.userService.getUser(userId).pipe(
      catchError((err) => {
        if (err.status === 404) {
          this.router.navigateByUrl('404', {
            replaceUrl: true,
            skipLocationChange: true
          });
        } else {
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