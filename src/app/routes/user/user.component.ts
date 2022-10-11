import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { User } from '@models/user.model';
import { ActivatedRoute, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NgForOf } from '@angular/common';
import { RelativeTimeFormatPipe } from '@shared/pipes/relative-time-format.pipe';
import { MyDatePipe } from '@shared/pipes/my-date.pipe';
import { ImgShadowComponent } from '@components/img-shadow/img-shadow.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    MatIconModule,
    MatTabsModule,
    MyDatePipe,
    RelativeTimeFormatPipe,
    ImgShadowComponent,
    RouterOutlet,
    NgForOf,
    RouterLinkActive,
    RouterLinkWithHref
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

  snapshotData = inject(ActivatedRoute).snapshot.data as { user: User };

  ngOnInit(): void {
    this.user = this.snapshotData.user;
  }
}
