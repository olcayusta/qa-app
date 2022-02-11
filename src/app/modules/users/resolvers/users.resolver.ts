import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { User } from '@shared/models/user.model';
import { catchError } from 'rxjs/operators';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<User[]> {
  constructor(private usersService: UsersService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> {
    return this.usersService.getAllUsers().pipe(
      catchError((err, caught) => {
        this.router.navigateByUrl('/404');
        return EMPTY;
      })
    );
  }
}
