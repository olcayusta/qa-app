import {
  Component,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../../../dialogs/settings-dialog/settings-dialog.component';

@Component({
  selector: 'qa-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDrawerComponent implements OnInit {
  @Output() closeDrawer = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openSettingsDialog(): void {
    this.closeDrawer.emit(true);
    this.dialog.open(SettingsDialogComponent, {
      minWidth: 900,
      autoFocus: false,
    });
  }

  onClicked(): void {
    this.closeDrawer.emit();
  }
}
