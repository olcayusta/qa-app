import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { User } from '@shared/models/user.model';
import { AuthService } from '@auth/auth.service';
import { RouterModule } from '@angular/router';
import { SocketService } from '@shared/services/socket.service';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'inek-iron-dropdown',
  templateUrl: './iron-dropdown.component.html',
  styleUrls: ['./iron-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IronDropdownComponent implements OnInit {
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
  declarations: [IronDropdownComponent],
  imports: [MaterialModule, RouterModule, SharedModule]
})
export class IronDropdownModule {}
