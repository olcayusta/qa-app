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

@Component({
  selector: 'inek-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDrawerComponent implements OnInit {
  @Output() closeDrawer = new EventEmitter<boolean>();

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
}
