import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-account-notifications',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatSlideToggleModule],
  templateUrl: './account-notifications.component.html',
  styleUrls: ['./account-notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountNotificationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
