import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [UsersComponent, UserListItemComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatDividerModule,
    MatButtonModule,
    SharedModule,
  ],
})
export class UsersModule {}
