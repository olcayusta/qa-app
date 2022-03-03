import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Type,
  ElementRef,
  ChangeDetectorRef
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
    private elementRef: ElementRef,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.notificationCount$ = this.notificationService.getUnseenCount().pipe(shareReplay());
  }

  async togglePopup(): Promise<void> {
    if (this.popupOpened) {
      this.popupOpened = false;
    } else {
      await this.loadComp();
      this.popupOpened = true;
      this.cd.markForCheck();
    }
  }

  async loadComp() {
    const { NotificationListPopupComponent } = await import(
      '@shared/components/notification-list-popup/notification-list-popup.component'
    );
    this.componentOutlet = NotificationListPopupComponent;
  }

  /**
   * Close the popup when the user clicks outside it.
   * @param e
   */
  outsideClick(e: MouseEvent): void {
    if (!e.composedPath().includes(this.elementRef.nativeElement)) {
      this.popupOpened = false;
    }
  }
}
