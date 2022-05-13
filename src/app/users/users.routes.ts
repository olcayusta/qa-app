import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListResolver } from './shared/resolvers/user-list.resolver';

export const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {
      users: UserListResolver
    },
    title: 'Kullanıcılar'
  }
];
