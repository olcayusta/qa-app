import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ɵmarkDirty as markDirty,
  Type,
  ElementRef,
} from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NotificationService } from '@shared/services/notification.service';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { NotificationListPopupComponent } from '../notification-list-popup/notification-list-popup.component';

@Component({
  selector: 'qa-notification-button',
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationButtonComponent implements OnInit {
  notificationCount$!: Observable<number>;

  popupOpened: boolean = false;
  blockScrollStrategy: ScrollStrategy = this.sso.block();

  comp?: Type<NotificationListPopupComponent>;

  outsideClicked = true;

  constructor(
    private notificationService: NotificationService,
    private sso: ScrollStrategyOptions,
    private elementRef: ElementRef
  ) {
    // this.blockScrollStrategy = this.sso.block();
  }

  ngOnInit(): void {
    this.notificationCount$ = this.notificationService
      .getUnseenCount()
      .pipe(shareReplay());
  }

  async openNotifications(event: Event): Promise<void> {
    if (this.popupOpened) {
      this.popupOpened = false;
    } else {
      const { NotificationListPopupComponent: comp } = await import(
        '../notification-list-popup/notification-list-popup.component'
      );
      this.comp = comp;
      markDirty(this);
      this.popupOpened = true;
    }

    /* const { NotificationListPopupComponent } = await import(
      '../notification-list-popup/notification-list-popup.component'
    );
    const comp = this.vcr.createComponent(NotificationListPopupComponent, null, this.injector);
    const cfr = this.cfr.resolveComponentFactory(comp);*/
  }

  outsideClick(e: MouseEvent): void {
    if (!e.composedPath().includes(this.elementRef.nativeElement)) {
      this.blockScrollStrategy = this.sso.noop();
      this.popupOpened = false;
      markDirty(this);
    }
  }

  onDetach() {
    this.popupOpened = false;
  }

  backdropClick() {
    alert('ok');
  }
}
