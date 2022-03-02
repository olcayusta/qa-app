import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService } from './services/settings.service';
import { User } from '@shared/models/user.model';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ProfilePictureDialogComponent } from '@dialogs/profile-picture-dialog/profile-picture-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {
  user$!: Observable<User>;

  constructor(private settingsService: SettingsService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.user$ = this.settingsService.getAccountSettings();
  }

  openProfilePictureDialog() {
    const dialog = this.dialog.open(ProfilePictureDialogComponent, {
      autoFocus: false,
      minWidth: 560
    });
  }
}
