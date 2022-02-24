import { ChangeDetectionStrategy, Component, Inject, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '@shared/services/socket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwPush, SwUpdate, VersionEvent, VersionReadyEvent } from '@angular/service-worker';
import { PushNotificationService } from '@shared/services/push-notification.service';
import { environment } from '@environments/environment';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth/auth.service';
import { filter, map } from 'rxjs/operators';
import { fromEvent, merge, Observable, of, Subscription } from 'rxjs';
import { SseService } from '@shared/services/sse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  networkStatus: boolean = false;
  networkStatus$: Subscription = Subscription.EMPTY;

  constructor(
    private router: Router,
    private authService: AuthService,
    private socketService: SocketService,
    private snackBar: MatSnackBar,
    private swPush: SwPush,
    private swUpdate: SwUpdate,
    private pushService: PushNotificationService,
    private zone: NgZone,
    @Inject(DOCUMENT) private document: Document,
    private sseService: SseService
  ) {
    // THEME FIX
    const storageKey = localStorage.getItem('theme-preference');
    // this.loadColorScheme(storageKey!);

    swUpdate.unrecoverable.subscribe((value) => {
      console.log(value.reason, value.type);
    });

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
        .open('Available update!', 'TAMAM', {
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
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');

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
        // TODO: Send to server.
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
    this.sseService.observerMessages(`http://localhost:9001/stream`).subscribe((value) => {
      console.log(value);
    });
  }

  /**
   * Check network status.
   */
  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(of(null), fromEvent(window, 'online'), fromEvent(window, 'offline'))
      .pipe(map(() => navigator.onLine))
      .subscribe((status) => {
        console.log('status', status);
        this.networkStatus = status;
        this.snackBar.open(`Status: ${this.networkStatus}`);
      });
  }

  ngOnInit() {
    /*    Notification.requestPermission().then((result) => {
          console.log(result);

          const notification = new Notification('Hi there!', {
            data: 103,
            icon: 'assets/icons/icon-72x72.png',
            badge: 'assets/icons/icon-72x72.png',
            body: 'This is a notification',
            image: 'https://placeimg.com/640/360/any',
          });

          notification.onclick = (event: any) => {
            notification.close()
            this.zone.run(() => {
              this.router.navigateByUrl(`/question/${notification.data}`).then(value => {
                console.log(value);
              })
            })
          };
        });*/
    /**
     * Make a notification for author user id for created answer for question.
     */
    if (this.authService.userValue) {
      this.socketService.on('new answer').subscribe(({ event, payload }) => {
        console.log('Sorunuza, yeni ber cevap geldi.');
        this.snackBar.open('One line text string.', 'TAMAM', {
          duration: 9999999
        });
      });
    }
  }
}
