import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@models/user.model';
import { RouterLinkWithHref } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ImgShadowComponent } from '@components/img-shadow/img-shadow.component';

@Component({
  selector: 'app-user-list-item',
  standalone: true,
  imports: [MatButtonModule, ImgShadowComponent, RouterLinkWithHref],
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent {
  @Input() user!: User;
}
