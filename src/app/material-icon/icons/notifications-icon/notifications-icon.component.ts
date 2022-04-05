import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'inek-notifications-icon',
  templateUrl: 'notifications_black_24dp.svg',
  styleUrls: ['../../material.icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationsIconComponent {
  constructor(private cd: ChangeDetectorRef) {
    this.cd.detach();
  }
}
