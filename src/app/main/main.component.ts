import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  ViewChild,
  AfterViewInit,
  Renderer2,
  Type,
  ChangeDetectorRef,
  ViewContainerRef
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { SideSheetComponent } from './components/side-sheet/side-sheet.component';
import { NavDrawerComponent } from './components/nav-drawer/nav-drawer.component';
import { DrawerService } from './components/nav-drawer/drawer.service';
import { SocketService } from '@shared/services/socket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit, AfterViewInit {
  mode!: MatDrawerMode;
  isSmallScreen!: boolean;

  @ViewChild('sidenav', { static: true }) navSidenav!: MatSidenav;
  @ViewChild('sheet') sidenavSheet!: MatSidenav;
  @ViewChild('navDrawerComponentRef', { read: ViewContainerRef })
  navDrawerComponentRef!: ViewContainerRef;

  navDrawerComponent!: Type<NavDrawerComponent>;
  sideSheetComponent!: Type<SideSheetComponent>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef,
    private drawerService: DrawerService,
    private socketService: SocketService
  ) {}

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
      console.log('Sorunuza, yeni ber cevap geldi.');
      this.snackBar.open('One line text string.', 'TAMAM', {
        duration: 9999999
      });
    });
  }

  hideScrollBar() {
    this.document.body.style.overflow = 'hidden';
  }

  showScrollBar() {
    this.document.body.style.overflow = '';
  }

  async sidenavOpenedStart() {
    await this.loadNavDrawerComponent();
    this.hideScrollBar();
  }

  sidenavClosedStart(): void {
    this.showScrollBar();
  }

  async loadNavDrawerComponent() {
    const { NavDrawerComponent } = await import('./components/nav-drawer/nav-drawer.component');
    this.navDrawerComponent = NavDrawerComponent;
    this.cd.markForCheck();
  }

  sheetOpened(): void {
    if (this.isSmallScreen) {
      this.document.body.style.overflow = 'hidden';
    }
  }

  sheetClosed(): void {
    this.document.body.style.overflow = '';
  }

  async loadSidenavSheetComponent() {
    const { SideSheetComponent } = await import('./components/side-sheet/side-sheet.component');
    this.sideSheetComponent = SideSheetComponent;
    this.cd.markForCheck();
  }
}
