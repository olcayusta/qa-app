import { ChangeDetectionStrategy, Component } from '@angular/core';
import { User } from '@models/user.model';
import { UserListItemComponent } from '../user-list-item/user-list-item.component';
import { NgForOf } from '@angular/common';
import { getResolverData } from '../../../../core/router.utils';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserListItemComponent, NgForOf],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent {
  users: User[] = getResolverData('users')
}
