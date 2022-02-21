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

@Component({
  selector: 'inek-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDrawerComponent implements OnInit {
  @Output() closeDrawer = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog, private vcr: ViewContainerRef) {}

  ngOnInit(): void {}

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
