import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@shared/models/user.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatInputModule, MatButtonModule, MatSlideToggleModule, MatDialogModule]
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
