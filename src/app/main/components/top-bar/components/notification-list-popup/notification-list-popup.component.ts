import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';
import { NotificationService } from '@shared/services/notification.service';
import { Notification } from '@shared/models/notification.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '@shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-notification-list-popup',
  templateUrl: './notification-list-popup.component.html',
  styleUrls: ['./notification-list-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationListPopupComponent implements OnInit {
  notifications$!: Observable<Notification[]>;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notifications$ = this.notificationService.getAllNotifications();
  }
}

@NgModule({
  declarations: [NotificationListPopupComponent],
  imports: [
    CommonModule,
    MatListModule,
    SharedModule,
    MatProgressSpinnerModule,
  ],
})
class NotificationListModule {}
