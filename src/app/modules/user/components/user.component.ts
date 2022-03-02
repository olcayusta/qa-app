import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

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

  // activeLink = this.links[0];

  constructor(private route: ActivatedRoute, private title: Title) {}

  ngOnInit(): void {
    const { user } = <{ user: User }>this.route.snapshot.data;
    this.user = user;
    this.title.setTitle(`${user.displayName} - ${environment.appTitle}`);
  }
}
