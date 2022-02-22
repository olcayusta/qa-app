import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ɵmarkDirty as markDirty,
  Type,
  ElementRef
} from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NotificationService } from '@shared/services/notification.service';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { NotificationListPopupComponent } from '@shared/components/notification-list-popup/notification-list-popup.component';

@Component({
  selector: 'inek-notification-button',
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationButtonComponent implements OnInit {
  notificationCount$!: Observable<number>;

  popupOpened = false;
  blockScrollStrategy: ScrollStrategy = this.sso.block();

  componentOutlet?: Type<NotificationListPopupComponent>;

  constructor(
    private notificationService: NotificationService,
    private sso: ScrollStrategyOptions,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.notificationCount$ = this.notificationService.getUnseenCount().pipe(shareReplay());
  }

  async openNotifications(event: Event): Promise<void> {
    if (this.popupOpened) {
      this.popupOpened = false;
    } else {
      await this.loadComponent();
      this.popupOpened = true;
    }
  }

  async loadComponent() {
    const { NotificationListPopupComponent: comp } = await import(
      '@shared/components/notification-list-popup/notification-list-popup.component'
    );
    this.componentOutlet = comp;
    markDirty(this);
  }

  outsideClick(e: MouseEvent): void {
    if (!e.composedPath().includes(this.elementRef.nativeElement)) {
      this.popupOpened = false;
    }
  }
}
