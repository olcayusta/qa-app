import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@shared/models/user.model';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@modules/material/material.module';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, MaterialModule, SharedModule]
})
export class UserListItemComponent {
  @Input() user!: User;
}
