import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'inek-profile-picture-dialog',
  templateUrl: './profile-picture-dialog.component.html',
  styleUrls: ['./profile-picture-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePictureDialogComponent implements OnInit {
  user!: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

}
