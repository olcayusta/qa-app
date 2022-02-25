import {
  Component,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  ViewContainerRef
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '@dialogs/settings-dialog/settings-dialog.component';
import { FeedbackDialogComponent } from '@dialogs/feedback-dialog/feedback-dialog.component';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { WatchedTagListDialogComponent } from '../../../watched-tag-list-dialog/watched-tag-list-dialog.component';

@Component({
  selector: 'inek-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDrawerComponent implements OnInit {
  @Output() closeDrawer = new EventEmitter<boolean>();

  items = [
    { label: 'Ana sayfa', link: '/' },
    { label: 'Kullanicilar', link: '/users' },
    { label: 'Etiketler', link: '/tags' }
  ];

  constructor(private dialog: MatDialog, private vcr: ViewContainerRef, private router: Router) {}

  ngOnInit(): void {
    /*    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((value) => {
      console.log(value);
    });*/
  }

  async openSettingsDialog() {
    this.closeDrawer.emit();
    const { SettingsDialogComponent } = await import(
      '@dialogs/settings-dialog/settings-dialog.component'
    );
    this.dialog.open(SettingsDialogComponent, {
      autoFocus: false,
      minWidth: 900
    });
  }

  onClicked(): void {
    this.closeDrawer.emit();
  }

  async openFeedbackDialog() {
    this.dialog.open(FeedbackDialogComponent, {
      autoFocus: 'dialog',
      minWidth: 640
    });
  }

  openWatchedTagsDialog() {
    const dialog = this.dialog.open(WatchedTagListDialogComponent, {
      minWidth: 512,
      autoFocus: false
    })
  }
}
