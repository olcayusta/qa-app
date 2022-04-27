import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@shared/models/user.model';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, MatDividerModule, MatButtonModule, SharedModule]
})
export class UserListItemComponent {
  @Input() user!: User;
}
