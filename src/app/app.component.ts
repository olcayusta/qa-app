import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  NgZone,
  OnInit,
  Renderer2
} from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '@shared/services/socket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwPush, SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { PushNotificationService } from '@shared/services/push-notification.service';
import { environment } from '@environments/environment';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth/auth.service';
import { filter, map } from 'rxjs/operators';
import { fromEvent, merge, of, Subscription } from 'rxjs';
import { SseService } from '@shared/services/sse.service';
import { BroadcastChannelService } from '@shared/services/broadcast-channel.service';
import { MatDialog } from '@angular/material/dialog';
import { BroadcastChannelLogoutDialogComponent } from '@dialogs/broadcast-channel-logout-dialog/broadcast-channel-logout-dialog.component';
import { HotkeyDialogComponent } from '@dialogs/hotkey-dialog/hotkey-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  networkStatus = false;
  networkStatus$ = Subscription.EMPTY;

  sub!: Subscription;

  @HostListener('document:visibilitychange')
  visibilityChange() {
    /*    if (document.visibilityState === 'hidden') {
      this.socketService.subject.complete();
    } else {
      this.sub = this.socketService.on('hello').subscribe(({ event, payload }) => {
        console.log('Anushka Sharma, size merhaba diyor...');
      });
    }*/
  }

  @HostListener('document:keydown', ['$event'])
  async ismetakey($event: KeyboardEvent) {
    const { metaKey, key, shiftKey } = $event;
    /*    console.log('MetaKey: ', metaKey);
    console.log('ShiftKey: ', shiftKey);
    console.log('key: ', key);*/

    if ((metaKey && key === '/') || (shiftKey && key === '?')) {
      const { HotkeyDialogComponent } = await import(
        './dialogs/hotkey-dialog/hotkey-dialog.component'
      );
      const dialog = this.dialog.open(HotkeyDialogComponent, {
        minWidth: 560
      });
    }
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router,
    private authService: AuthService,
    private socketService: SocketService,
    private pushService: PushNotificationService,
    private broadcastChannel: BroadcastChannelService,
    private sseService: SseService,
    private snackBar: MatSnackBar,
    private swPush: SwPush,
    private swUpdate: SwUpdate,
    private zone: NgZone,
    private dialog: MatDialog
  ) {
    // THEME FIX
    // const storageKey = localStorage.getItem('theme-preference');
    // this.loadColorScheme(storageKey!);

    const updatesAvailable = swUpdate.versionUpdates.pipe(
      filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      map((evt) => ({
        type: 'UPDATE_AVAILABLE',
        current: evt.currentVersion,
        available: evt.latestVersion
      }))
    );

    updatesAvailable.subscribe((value) => {
      this.snackBar
        .open('Available update!', 'OKAY', {
          duration: 4000
        })
        .onAction()
        .subscribe((_) => {
          console.log('The snackbar action was triggered!');
          this.document.location.reload();
        });
    });
  }

  /**
   * Change the theme of the app based on the user's preference.
   * @param scheme The color scheme to use. Either 'light' or 'dark'.
   */
  loadColorScheme(scheme: string) {
    let head = this.document.getElementsByTagName('head')[0];
    let link = this.document.createElement('link');

    link.rel = 'stylesheet';
    link.href = `/${scheme}.css`;

    head.appendChild(link);
  }

  /**
   * If sw push is supported, subscribe to push notifications.
   * @private
   */
  private async subscribeToPush() {
    if (this.swPush.isEnabled) {
      try {
        const sub = await this.swPush.requestSubscription({
          serverPublicKey: environment.PUBLIC_VAPID_KEY_OF_SERVER
        });
        this.pushService.sendSubscriptionToTheServer(sub).subscribe();
      } catch (e) {
        console.error(`Could not subscribe due to:`, e);
      }
    }
  }

  subscribeToSSE(): void {
    this.sseService.getMessages().subscribe((value) => {
      console.log(value);
    });
  }

  checkNetworkStatus(): void {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(of(null), fromEvent(window, 'online'), fromEvent(window, 'offline'))
      .pipe(map(() => navigator.onLine))
      .subscribe((status) => {
        console.log('status', status);
        this.networkStatus = status;
        this.snackBar.open(`Status: ${this.networkStatus}`);
      });
  }

  /**
   * Broadcast channel for logout. (Initial version)
   */
  async broadcast() {
    this.broadcastChannel.messagesOfType('hello').subscribe(async (value) => {
      const { BroadcastChannelLogoutDialogComponent } = await import(
        './dialogs/broadcast-channel-logout-dialog/broadcast-channel-logout-dialog.component'
      );
      this.zone.run(() => {
        const dialog = this.dialog.open(BroadcastChannelLogoutDialogComponent, {
          autoFocus: false,
          minWidth: 560
        });
      });
    });
  }

  ngOnInit() {
    this.subscribeToSSE();
    /**
     * Make a notification for author user id for created answer for question.
     */
    if (this.authService.userValue) {
      this.sub = this.socketService.on('new answer').subscribe(({ event, payload }) => {
        console.log('Sorunuza, yeni ber cevap geldi.');
        this.snackBar.open('One line text string.', 'TAMAM', {
          duration: 9999999
        });
      });
    }

    this.socketService.on('hello').subscribe(({ event, payload }) => {
      console.log('Anushka Sharma, size merhaba diyor...');
    });
  }
}
