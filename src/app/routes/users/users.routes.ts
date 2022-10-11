import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { inject } from '@angular/core';
import { UsersService } from './users.service';

export default [
  {
    path: '',
    component: UsersComponent,
    resolve: {
      users: () => inject(UsersService).getAllUsers()
    },
    title: 'Kullanıcılar'
  }
] as Routes;

