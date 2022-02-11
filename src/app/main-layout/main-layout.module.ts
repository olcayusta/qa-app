import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarButtonComponent } from '../main/components/top-bar/components/avatar-button/avatar-button.component';
import { NotificationButtonComponent } from '../main/components/top-bar/components/notification-button/notification-button.component';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [AvatarButtonComponent, NotificationButtonComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [AvatarButtonComponent, NotificationButtonComponent],
})
export class MainLayoutModule {}
