import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { NotificationService } from '@shared/services/notification.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable } from 'rxjs';
import { Notification } from '@shared/models/notification.model';

@Component({
  selector: 'app-notification-list-popup',
  standalone: true,
  imports: [CommonModule, SharedModule, MatProgressSpinnerModule, MatListModule],
  templateUrl: './notification-list-popup.component.html',
  styleUrls: ['./notification-list-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationListPopupComponent implements OnInit {
  notifications$!: Observable<Notification[]>;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notifications$ = this.notificationService.getAllNotifications();
  }
}
