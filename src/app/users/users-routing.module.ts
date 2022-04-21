import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserListResolver } from './shared/resolvers/user-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: { users: UserListResolver },
    title: 'Kullanıcılar'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
