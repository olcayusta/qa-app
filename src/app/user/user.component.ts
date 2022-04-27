import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '@shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { UserTitleResolver } from './resolvers/user-title.resolver';
import { UserQuestionsResolver } from './components/user-questions/resolvers/user-questions.resolver';
import { UserAnswersResolver } from './components/user-answers/resolvers/user-answers.resolver';

export const ROUTES: Route[] = [
  {
    path: '',
    title: UserTitleResolver,
    children: [
      {
        path: 'questions',
        loadComponent: () =>
          import('./components/user-questions/user-questions.component').then((m) => m.UserQuestionsComponent),
        resolve: {
          questions: UserQuestionsResolver
        }
      },
      {
        path: 'answers',
        loadComponent: () =>
          import('./components/user-answers/user-answers.component').then((m) => m.UserAnswersComponent),
        resolve: {
          answers: UserAnswersResolver
        }
      }
    ]
  }
];

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule, MatTabsModule, SharedModule, MatIconModule, MatRippleModule]
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
