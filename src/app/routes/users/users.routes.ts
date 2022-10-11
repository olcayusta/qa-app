import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListResolver } from './components/user-list/user-list.resolver';

export default [
  {
    path: '',
    component: UsersComponent,
    resolve: {
      users: UserListResolver
    },
    title: 'Kullanıcılar'
  }
] as Routes;

