import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@shared/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ProfilePictureDialogComponent } from '@modules/settings/components/profile-picture-dialog/profile-picture-dialog.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {
  user!: User;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.user = this.route.snapshot.data['user'];
  }

  async openProfilePictureDialog() {
    const { ProfilePictureDialogComponent } = await import(
      './components/profile-picture-dialog/profile-picture-dialog.component'
    );
    this.dialog.open(ProfilePictureDialogComponent, {
      autoFocus: false,
      minWidth: 560
    });
  }
}
