import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-account-notifications',
  templateUrl: './account-notifications.component.html',
  styleUrls: ['./account-notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountNotificationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
