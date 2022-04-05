import { Component, OnInit, ChangeDetectionStrategy, NgModule, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { DrawerService } from './drawer.service';
import { MaterialIconModule } from '../../../material-icon/material-icon.module';

@Component({
  selector: 'inek-nav-drawer',
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

  constructor(private dialog: MatDialog, private drawerService: DrawerService) {}

  ngOnDestroy() {
    console.log('NavDrawer destroyed!');
  }

  ngOnInit(): void {}

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
    const { FeedbackDialogComponent } = await import(
      '@dialogs/feedback-dialog/feedback-dialog.component'
    );
    this.dialog.open(FeedbackDialogComponent, {
      autoFocus: 'dialog',
      minWidth: 640
    });
  }

  async openWatchedTagsDialog() {
    const { WatchedTagListDialogComponent } = await import(
      '../../../dialogs/watched-tag-list-dialog/watched-tag-list-dialog.component'
    );
    const dialog = this.dialog.open(WatchedTagListDialogComponent, {
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

@NgModule({
  declarations: [NavDrawerComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule,
    MatListModule,
    MatDialogModule,
    MaterialIconModule
  ]
})
class NavDrawerModule {}
