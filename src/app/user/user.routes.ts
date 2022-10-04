import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserResolver } from './user.resolver';
import { UserTitleResolver } from './shared/resolvers/user-title.resolver';
import { UserQuestionsResolver } from './user-questions/user-questions.resolver';
import { UserAnswersResolver } from './user-answers/user-answers.resolver';

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
    resolve: {
      user: UserResolver
    },
    children: [
      {
        path: '',
        title: UserTitleResolver,
        children: [
          {
            path: 'questions',
            loadComponent: () =>
              import('./user-questions/user-questions.component').then(c => c.UserQuestionsComponent),
            resolve: {
              questions: UserQuestionsResolver
            }
          },
          {
            path: 'answers',
            loadComponent: () =>
              import('./user-answers/user-answers.component').then(c => c.UserAnswersComponent),
            resolve: {
              answers: UserAnswersResolver
            }
          }
        ]
      }
    ]
  }
];
