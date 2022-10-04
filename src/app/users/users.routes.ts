import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListResolver } from './user-list/user-list.resolver';

export const USERS_ROUTES: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {
      users: UserListResolver
    },
    title: 'Kullanıcılar'
  }
];

