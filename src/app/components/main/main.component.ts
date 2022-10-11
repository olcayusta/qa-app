import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
  Renderer2,
  Type,
  ChangeDetectorRef,
  ViewContainerRef, inject
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDrawerMode, MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT, NgComponentOutlet } from '@angular/common';
import { SideSheetComponent } from './side-sheet/side-sheet.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { DrawerService } from './services/drawer.service';
import { SocketService } from '@shared/services/socket.service';
import { TopAppBarComponent } from './components/top-bar/top-app-bar.component';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { StickyDirective } from './components/top-bar/directives/sticky.directive';
import { ExtendedFabDirective } from './directives/extended-fab.directive';
import { MatButtonModule } from '@angular/material/button';
import { GfIconComponent } from '../gf-icon/gf-icon.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    TopAppBarComponent,
    StickyDirective,
    ExtendedFabDirective,
    MatSidenavModule,
    MatButtonModule,
    NgComponentOutlet,
    RouterOutlet,
    GfIconComponent,
    RouterLinkWithHref
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MainComponent implements OnInit, AfterViewInit {
  mode!: MatDrawerMode;
  isSmallScreen!: boolean;

  @ViewChild('sidenav', { static: true }) navSidenav!: MatSidenav;
  @ViewChild('sheet') sidenavSheet!: MatSidenav;
  @ViewChild('navDrawerComponentRef', { read: ViewContainerRef })
  navDrawerComponentRef!: ViewContainerRef;

  navDrawerComponent!: Type<NavDrawerComponent>;
  sideSheetComponent!: Type<SideSheetComponent>;

  private document = inject(DOCUMENT);

  /*  private renderer = inject(Renderer2);
    private cd = inject(ChangeDetectorRef);
    private snackBar = inject(MatSnackBar);
    private breakpointObserver = inject(BreakpointObserver);
    private drawerService = inject(DrawerService);
    private socketService = inject(SocketService);*/

  constructor(
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef,
    private drawerService: DrawerService,
    private socketService: SocketService
  ) {
  }

  ngAfterViewInit() {
    this.drawerService.setSidenav(this.navSidenav);
  }

  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    this.isSmallScreen ? (this.mode = 'over') : 'side';
    this.mode = 'side';
    this.listenToAnsweredQuestions();
  }

  listenToAnsweredQuestions() {
    this.socketService.on('new answer').subscribe(({ event, payload }) => {
      this.snackBar.open('One line text string.', 'TAMAM', {
        duration: 4000
      });
    });
  }

  hideScrollBar() {
    this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
  }

  showScrollBar() {
    this.renderer.setStyle(this.document.body, 'overflow', '');
  }

  async sidenavOpenedStart() {
    await this.loadNavDrawerComponent();
    this.hideScrollBar();
  }

  sidenavClosedStart(): void {
    this.showScrollBar();
  }

  /**
   * Loads the nav drawer component
   */
  async loadNavDrawerComponent() {
    const { NavDrawerComponent } = await import('./nav-drawer/nav-drawer.component');
    this.navDrawerComponent = NavDrawerComponent;
    this.cd.markForCheck();
  }

  sheetOpenedStart(): void {
    if (this.isSmallScreen) {
      this.document.body.style.overflow = 'hidden';
    }
  }

  sheetClosedStart(): void {
    this.document.body.style.overflow = '';
  }

  async loadSidenavSheetComponent() {
    const { SideSheetComponent } = await import('./side-sheet/side-sheet.component');
    this.sideSheetComponent = SideSheetComponent;
    this.cd.markForCheck();
  }

  installApp() {
  }
}
