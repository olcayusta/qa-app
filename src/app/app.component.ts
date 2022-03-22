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
import { BroadcastChannelLogoutDialogComponent } from './broadcast-channel-logout-dialog/broadcast-channel-logout-dialog.component';
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

  @HostListener('document:keydown', ['$event'])
  ismetakey($event: KeyboardEvent) {
    const { metaKey, key, shiftKey } = $event;
    /*    console.log('MetaKey: ', metaKey);
    console.log('ShiftKey: ', shiftKey);
    console.log('key: ', key);*/

    if ((metaKey && key === '/') || (shiftKey && key === '?')) {
      console.log('Open Shortcut Dialog!');
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

  /**
   * If SSE is supported, subscribe to SSE events.
   */
  subscribeToSSE(): void {
    this.sseService.observerMessages(environment.SSE_URL).subscribe((value) => {
      console.log(value);
    });
  }

  /**
   * Check network status.
   */
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
  broadcast() {
    this.broadcastChannel.messagesOfType('hello').subscribe((value) => {
      this.zone.run(() => {
        /*const dialog = this.dialog.open(BroadcastChannelLogoutDialogComponent, {
          autoFocus: false,
          minWidth: 560
        });*/
      });
    });
  }

  ngOnInit() {
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

    /*    this.socketService.on('hello').subscribe(({ event, payload }) => {
      alert(event);
    });*/

    const observableA = this.socketService.subject.multiplex(
      () => ({ subscribe: 'A' }), // When servers get this message, it will start sending messages for 'A'...
      () => ({ unsubscribe: 'A' }), //...and when gets this one, it will stop.
      (message) => message.event === 'A' // If the function returns `true` message is passed down the stream. Skipped if the function returns false.
    );

    const observableB = this.socketService.subject.multiplex(
      // And the same goes for 'B'.
      () => ({ subscribe: 'B' }),
      () => ({ unsubscribe: 'B un oldu' }),
      (message) => message.event === 'B'
    );

    // const subA = observableA.subscribe((messageForA) => console.log(messageForA));
    // At this moment WebSocket connection is established. Server gets `{"subscribe": "A"}` message and starts sending messages for 'A'

    // const subB = observableB.subscribe((messageForB) => console.log(messageForB));
    // Since we already have a connection, we just send `{"subscribe": "B"} message to the server. It starts sending messages for 'B'
    // which we log here.

    // Message '{"unsubscribe": "B"}' is sent to the server, which stops sending 'B' messages.

    // subA.unsubscribe();
    // Message '{"unsubscribe": "A"}' makes the server stop sending messages for 'A'. Since there is no more subscribers to root Subject,
    // socket connection closes.
  }
}
