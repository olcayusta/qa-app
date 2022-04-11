import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
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
      path: '/tags',
      label: 'Bookmarks'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { user } = this.route.snapshot.data as { user: User };
    this.user = user;
  }
}
