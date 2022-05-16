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
import { NotificationButtonComponent } from './components/notification-button/notification-button.component';
import { AvatarButtonComponent } from './components/avatar-button/avatar-button.component';
import { DrawerService } from '../../services/drawer.service';
import { map } from 'rxjs/operators';
import { Event, NavigationStart, Router, RouterModule } from '@angular/router';
import { TopAppBarLogoComponent } from './components/top-app-bar-logo/top-app-bar-logo.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@modules/material/material.module';

@Component({
  selector: 'app-top-app-bar',
  templateUrl: './top-app-bar.component.html',
  styleUrls: ['./top-app-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MaterialModule, RouterModule, SearchFormComponent, TopAppBarLogoComponent]
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
        await import('./components/notification-button/notification-button.component'),
        await import('./components/avatar-button/avatar-button.component')
      ]);

      this.avatarButtonOutlet = AvatarButtonComponent;
      this.notificationButtonOutlet = NotificationButtonComponent;

      // await this.loadNotificationButtonComponent();

      this.componentsLoaded = true;
      this.cdr.markForCheck();

      // alert('Bileşenler yüklendi.');
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

  async loadNotificationButtonComponent() {
    const { NotificationButtonComponent } = await import(
      './components/notification-button/notification-button.component'
    );
    this.notificationButtonOutlet = NotificationButtonComponent;
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
