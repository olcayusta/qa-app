import { Component, OnInit, ChangeDetectionStrategy, Type, ElementRef, ChangeDetectorRef } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NotificationService } from '@shared/services/notification.service';
import { OverlayModule, ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { NotificationListPopupComponent } from '@shared/components/notification-list-popup/notification-list-popup.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-notification-button',
  standalone: true,
  imports: [CommonModule, SharedModule, OverlayModule, MatButtonModule, MatBadgeModule, MatTooltipModule],
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationButtonComponent implements OnInit {
  notificationCount$!: Observable<number>;

  popupOpened = false;

  scrollStrategy: ScrollStrategy = this.sso.block();
  componentType!: Type<NotificationListPopupComponent>;

  constructor(
    private notificationService: NotificationService,
    private sso: ScrollStrategyOptions,
    private elementRef: ElementRef,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.notificationCount$ = this.notificationService.getUnseenCount().pipe(
      map((notification) => notification.unseenCount),
      shareReplay()
    );
  }

  async togglePopup(): Promise<void> {
    if (this.popupOpened) {
      this.popupOpened = false;
    } else {
      await this.loadComponent();
      this.popupOpened = true;
      this.cd.markForCheck();
    }
  }

  async loadComponent() {
    const { NotificationListPopupComponent } = await import(
      '@shared/components/notification-list-popup/notification-list-popup.component'
    );
    this.componentType = NotificationListPopupComponent;
  }

  /**
   * Close the popup when the user clicks outside it.
   * @param $event
   */
  closePopupOnOutsideClicked($event: MouseEvent) {
    if (!$event.composedPath().includes(this.elementRef.nativeElement)) {
      this.popupOpened = false;
    }
  }
}
