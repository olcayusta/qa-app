import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListItemComponent {
  @Input() user!: User;
}
