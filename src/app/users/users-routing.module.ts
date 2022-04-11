import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserListResolver } from './resolvers/user-list.resolver';
import { environment } from '@environments/environment';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: { users: UserListResolver },
    title: `Kullanıcılar - ${environment.appTitle}`
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
