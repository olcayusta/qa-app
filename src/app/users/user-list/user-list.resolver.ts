import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '@shared/models/user.model';
import { UsersService } from '../users.service';

@Injectable({
  providedIn: 'root'
})
export class UserListResolver implements Resolve<User[]> {
  private usersService = inject(UsersService);

  resolve(): Observable<User[]> {
    return this.usersService.getAllUsers();
  }
}
