import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@models/user.model';
import { AuthService } from '@auth/auth.service';
import { SocketService } from '@shared/services/socket.service';
import { MatListModule } from '@angular/material/list';
import { RouterLinkWithHref } from '@angular/router';
import { GfIconComponent } from '@components/gf-icon/gf-icon.component';

@Component({
  selector: 'app-user-profile-popup',
  standalone: true,
  imports: [MatListModule, RouterLinkWithHref, GfIconComponent],
  templateUrl: './user-profile-popup.component.html',
  styleUrls: ['./user-profile-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfilePopupComponent implements OnInit {
  user!: User;

  constructor(private authService: AuthService, private socketService: SocketService) {
  }

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  logout(): void {
    this.authService.logout();
    this.socketService.disconnect();
    window.location.reload();
  }
}
