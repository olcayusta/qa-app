import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { User } from '@shared/models/user.model';
import { AuthService } from '@auth/auth.service';
import { RouterModule } from '@angular/router';
import { SocketService } from '@shared/services/socket.service';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@shared/shared.module';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'inek-user-profile-popup',
  templateUrl: './user-profile-popup.component.html',
  styleUrls: ['./user-profile-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

@NgModule({
  declarations: [UserProfilePopupComponent],
  imports: [MaterialModule, RouterModule, SharedModule, MatListModule]
})
export class UserProfilePopupModule {}
