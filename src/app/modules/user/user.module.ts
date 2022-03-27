import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user.component';
import { SharedModule } from '@shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, MatTabsModule, SharedModule, MatIconModule]
})
export class UserModule {}
