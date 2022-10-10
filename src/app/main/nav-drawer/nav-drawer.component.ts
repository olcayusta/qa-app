import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { DrawerService } from '../services/drawer.service';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '@shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ForumIconComponent } from '@shared/icons/forum-icon/forum-icon.component';

@Component({
  selector: 'app-nav-drawer',
  standalone: true,
  imports: [
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    ForumIconComponent,
    RouterLinkActive,
    RouterLinkWithHref
  ],
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDrawerComponent implements OnInit, OnDestroy {
  private pages = [
    { label: 'Ana sayfa', link: '/' },
    { label: 'Kullanıcılar', link: '/users' },
    { label: 'Etiketler', link: '/tags' }
  ];

  constructor(private dialog: MatDialog, private drawerService: DrawerService) {
  }

  ngOnDestroy() {
    console.log('NavDrawer destroyed!');
  }

  ngOnInit(): void {
  }

  async openSettingsDialog() {
    this.drawerService.toggle();
    /*   const { SettingsDialogComponent } = await import(
      '@dialogs/settings-dialog/settings-dialog.component'
    );
    this.dialog.open(SettingsDialogComponent, {
      autoFocus: false,
      minWidth: 900
    });*/
  }

  onClicked(): void {
    this.drawerService.toggle();
  }

  async experimentalOpenDialog() {
    /*    const { AbcComponent, AbcModule } = await import('./abc/abc.component');
    const ngModuleRef = createNgModuleRef(AbcModule, this.injector);
    this.vcr.createComponent(AbcComponent, {
      ngModuleRef: ngModuleRef
    });
    this.vcr.clear();*/
  }

  async openFeedbackDialog() {
    const { FeedbackDialogComponent } = await import('@components/dialogs/feedback-dialog/feedback-dialog.component');
    this.dialog.open(FeedbackDialogComponent, {
      autoFocus: 'dialog',
      minWidth: 640
    });
  }

  async openWatchedTagsDialog() {
    const { WatchedTagListDialogComponent } = await import('@components/dialogs/watched-tag-list-dialog/watched-tag-list-dialog.component');
    this.dialog.open(WatchedTagListDialogComponent, {
      minWidth: 512,
      autoFocus: false
    });
  }

  closeSidenav() {
    this.drawerService.toggle().then((value) => {
      console.log('Mat Sidenav Bileseni Kapatildi.');
    });
  }
}
