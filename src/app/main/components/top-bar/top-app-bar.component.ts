import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  Type
} from '@angular/core';
import { User } from '@shared/models/user.model';
import { AuthService } from '@auth/auth.service';
import { Observable } from 'rxjs';
import { StateService } from '@shared/services/state.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NotificationButtonComponent } from './notification-button/notification-button.component';
import { AvatarButtonComponent } from './avatar-button/avatar-button.component';
import { DrawerService } from '../../services/drawer.service';
import { map } from 'rxjs/operators';
import { Event, NavigationStart, Router, RouterLinkWithHref } from '@angular/router';
import { TopAppBarLogoComponent } from './top-app-bar-logo/top-app-bar-logo.component';
import { AsyncPipe, NgComponentOutlet, NgIf } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';
import { DarkModeIconComponent } from '@shared/icons/dark-mode-icon/dark-mode-icon.component';
import { HelpIconComponent } from '@shared/icons/help-icon/help-icon.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-top-app-bar',
  standalone: true,
  imports: [
    SearchFormComponent,
    TopAppBarLogoComponent,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    SharedModule,
    DarkModeIconComponent,
    HelpIconComponent,
    NgComponentOutlet,
    NgIf,
    AsyncPipe,
    MatTooltipModule,
    RouterLinkWithHref
  ],
  templateUrl: './top-app-bar.component.html',
  styleUrls: ['./top-app-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopAppBarComponent implements OnInit {
  @Output() openSheet = new EventEmitter();

  isLoggedIn$!: Observable<boolean>;
  user!: User;

  isHandset$!: Observable<boolean>;

  isWeb$!: Observable<boolean>;

  componentsLoaded = false;

  searchFormComponentOutlet!: Type<SearchFormComponent>;
  notificationButtonOutlet!: Type<NotificationButtonComponent>;
  avatarButtonOutlet!: Type<AvatarButtonComponent>;

  constructor(
    private authService: AuthService,
    private stateService: StateService,
    private breakpointObserver: BreakpointObserver,
    private cdr: ChangeDetectorRef,
    private drawerService: DrawerService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.isLoggedIn$ = this.authService.isLoggedIn$;

    if (this.authService.userValue) {
      const [{ NotificationButtonComponent }, { AvatarButtonComponent }] = await Promise.all([
        this.loadNotificationButtonComponent(),
        this.loadAvatarButtonComponent()
      ]);

      this.avatarButtonOutlet = AvatarButtonComponent;
      this.notificationButtonOutlet = NotificationButtonComponent;

      this.componentsLoaded = true;
      this.cdr.markForCheck();
    }

    /**
     * Load components if breakpoint is wider than handset.
     */
    this.breakpointObserver.observe(Breakpoints.Web).subscribe(async ({ matches }) => {
      if (matches) {
        await this.loadSearchFormComponent();
      }
    });

    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(({ matches }) => matches));

    this.isWeb$ = this.breakpointObserver.observe(Breakpoints.Web).pipe(map(({ matches }) => matches));

    this.router.events.subscribe((value: Event) => {
      if (value instanceof NavigationStart) {
        if (value.url.includes('question')) {
        }
      }
    });
  }

  async loadAvatarButtonComponent() {
    return await import('./avatar-button/avatar-button.component');
  }

  async loadNotificationButtonComponent() {
    return await import('./notification-button/notification-button.component');
  }

  /**
   * Search Form Bileşenini desktop ise yükle...
   */
  async loadSearchFormComponent() {
    const { SearchFormComponent } = await import('./components/search-form/search-form.component');
    this.searchFormComponentOutlet = SearchFormComponent;
    this.cdr.markForCheck();
  }

  onMenuBtnClickedOpenSidenav() {
    this.drawerService.toggle();
  }

  signInButtonClicked() {
    this.authService.redirectUrl = this.router.url;
  }
}
