import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AccountNotificationsComponent } from './components/account-notifications/account-notifications.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [SettingsComponent, AccountNotificationsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule
  ]
})
export class SettingsModule {}
