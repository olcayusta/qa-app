import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '@shared/models/user.model';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class UserListResolver implements Resolve<User[]> {
  constructor(private usersService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.usersService.getAllUsers();
  }
}
