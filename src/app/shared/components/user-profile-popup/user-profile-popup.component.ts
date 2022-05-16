import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@shared/models/user.model';
import { AuthService } from '@auth/auth.service';
import { SocketService } from '@shared/services/socket.service';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-profile-popup',
  templateUrl: './user-profile-popup.component.html',
  styleUrls: ['./user-profile-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MaterialModule, RouterModule, SharedModule, MatListModule]
})
export class UserProfilePopupComponent implements OnInit {
  user!: User;

  constructor(private authService: AuthService, private socketService: SocketService) {}

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  logout(): void {
    this.authService.logout();
    this.socketService.disconnect();
    window.location.reload();
  }
}
