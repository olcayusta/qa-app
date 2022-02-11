import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, MatTabsModule],
})
export class UserModule {}
