import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  NgZone,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  ResolveEnd,
  ResolveStart,
  Router,
} from '@angular/router';
import { SocketService } from '@shared/services/socket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerService } from '@shared/services/spinner.service';
import { SwPush, SwUpdate, VersionEvent } from '@angular/service-worker';
import { PushNotificationService } from '@shared/services/push-notification.service';
import { environment } from '@environments/environment';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  spinner = false;

  subscription!: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private socketService: SocketService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private spinnerService: SpinnerService,
    private swPush: SwPush,
    private swUpdate: SwUpdate,
    private pushService: PushNotificationService,
    private breakpointObserver: BreakpointObserver,
    private zone: NgZone,
    @Inject(DOCUMENT) private document: Document,
  ) {
    // THEME FIX
    const storageKey = localStorage.getItem('theme-preference');
    // this.loadColorScheme(storageKey!);

    swUpdate.unrecoverable.subscribe((value) => {
      console.log(value.reason, value.type);
    });

    swUpdate.versionUpdates.subscribe((event: VersionEvent) => {
      console.log(event)
    })

    swUpdate.available.subscribe((event) => {
      console.log(event);
      const snackBar = this.snackBar.open('Available update!', 'TAMAM', {
        duration: 500000,
      });

      this.subscription = snackBar.onAction().subscribe((value) => {
        console.log(value);
        document.location.reload();
      });

      console.log(this.subscription.closed);
    });

    // Spinner
    router.events.subscribe((value) => {
      if (value instanceof ResolveStart) {
        this.spinner = true;
        this.spinnerService.addSpinner();
      }

      if (value instanceof ResolveEnd) {
        this.spinner = false;
        this.spinnerService.removeSpinner();
      }

      if (
        value instanceof (NavigationCancel || NavigationError || NavigationEnd)
      ) {
        this.spinner = false;
        this.spinnerService.removeSpinner();
      }
    });
  }

  loadColorScheme(scheme: string) {
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = `/${scheme}.css`;

    head.appendChild(link);
  }

  async initSwPush(): Promise<void> {
    if (this.swPush.isEnabled) {
      try {
        const subscription = await this.swPush.requestSubscription({
          serverPublicKey: environment.vapidPublic,
        });
        this.pushService.sendSubscriptionToTheServer(subscription).subscribe();
      } catch (e) {
        console.error(e);
      }
    }
  }

  async ngOnInit(): Promise<void> {
    await this.initSwPush();

    /* set('hello', 'world')
      .then((value) => {
        console.log(value);
      })
      .catch((reason) => {
        console.error(reason);
      });*/

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
        this.snackBar.open('One line text string.', 'GÖRÜNTÜLE', {
          duration: 9999999,
        });
      });
    }

    /*this.socketService.on('hello').subscribe(({ payload }) => {
      console.log(payload);
    });*/
  }
}
