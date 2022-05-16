import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { RelativeTimeFormatPipe } from '@shared/pipes/relative-time-format.pipe';
import { MyDatePipe } from '@shared/pipes/my-date.pipe';
import { ImgShadowComponent } from '@shared/components/img-shadow/img-shadow.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatTabsModule,
    MyDatePipe,
    RelativeTimeFormatPipe,
    ImgShadowComponent
  ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  user!: User;

  links = [
    {
      path: '/',
      label: 'Ana Sayfa'
    },
    {
      path: '/questions',
      label: 'Sorular'
    },
    {
      path: '/answers',
      label: 'Cevaplar'
    },
    {
      path: '/tags',
      label: 'Etiketler'
    },
    {
      path: '/bookmarks',
      label: 'Bookmarks'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { user } = this.route.snapshot.data as { user: User };
    this.user = user;
  }
}
