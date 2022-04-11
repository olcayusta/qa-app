import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  Type,
  ɵmarkDirty as markDirty
} from '@angular/core';
import { User } from '@shared/models/user.model';
import { AuthService } from '@auth/auth.service';
import { Observable } from 'rxjs';
import { StateService } from '@shared/services/state.service';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState
} from '@angular/cdk/layout';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NotificationButtonComponent } from './components/notification-button/notification-button.component';
import { AvatarButtonComponent } from './components/avatar-button/avatar-button.component';
import { DrawerService } from '../nav-drawer/drawer.service';
import { map } from 'rxjs/operators';
import { NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'id-top-app-bar',
  templateUrl: './top-app-bar.component.html',
  styleUrls: ['./top-app-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopAppBarComponent implements OnInit {
  @Output() openSheet = new EventEmitter();

  isLoggedIn$!: Observable<boolean>;
  user!: User;

  // any
  topbarOpened: any;

  isHandset!: boolean;

  isHandset$!: Observable<boolean>;

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
    private router: Router,
    private readonly location: Location
  ) {}

  async ngOnInit(): Promise<void> {
    this.isLoggedIn$ = this.authService.isLoggedIn$;

    if (this.authService.userValue) {
      /*const { NotificationButtonComponent } = await import(
        './components/notification-button/notification-button.component'
      );
      this.notificationButtonOutlet = NotificationButtonComponent;

      const { AvatarButtonComponent } = await import(
        './components/avatar-button/avatar-button.component'
      );
      this.avatarButtonOutlet = AvatarButtonComponent;
      this.componentsLoaded = true;*/

      const [{ NotificationButtonComponent }, { AvatarButtonComponent }] =
        await Promise.all([
          await import(
            './components/notification-button/notification-button.component'
          ),
          await import('./components/avatar-button/avatar-button.component')
        ]);

      this.avatarButtonOutlet = AvatarButtonComponent;
      this.notificationButtonOutlet = NotificationButtonComponent;
      this.componentsLoaded = true;
    }

    /*    const { SearchFormComponent } = await import('./components/search-form/search-form.component');
    this.searchFormComponentOutlet = SearchFormComponent;
    this.cdr.detectChanges();*/

    this.isHandset$ = this.breakpointObserver
      .observe(Breakpoints.Handset)
      .pipe(map(({ matches }) => matches));

    this.router.events.subscribe((value) => {
      if (value instanceof NavigationStart) {
        if (value.url.includes('question')) {
        }
      }
    });

    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .subscribe((breakpointState: BreakpointState) => {
        this.isHandset = breakpointState.matches;

        // Mobile phone
        if (this.isHandset) {
          this.stateService.subject.subscribe((state) => {
            this.topbarOpened = state;
            // console.log(state);
            markDirty(this);
          });
        }

        markDirty(this);
      });
  }

  onMenuBtnClickedOpenSidenav() {
    this.drawerService.toggle();
  }
}
