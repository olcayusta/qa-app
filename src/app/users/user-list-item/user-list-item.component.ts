import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@shared/models/user.model';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ImgShadowComponent } from '@shared/components/img-shadow/img-shadow.component';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, MatButtonModule, ImgShadowComponent]
})
export class UserListItemComponent {
  @Input() user!: User;
}
