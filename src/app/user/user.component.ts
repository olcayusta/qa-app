import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@modules/material/material.module';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule, SharedModule]
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
