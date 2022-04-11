import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersResolver } from './resolvers/users.resolver';
import { environment } from '@environments/environment';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: { users: UsersResolver },
    title: `Kullanıcılar - ${environment.appTitle}`
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
