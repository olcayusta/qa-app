import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserResolver } from './shared/resolvers/user.resolver';
import { UserTitleResolver } from './shared/resolvers/user-title.resolver';
import { UserQuestionsResolver } from './user-questions/resolvers/user-questions.resolver';
import { UserAnswersResolver } from './user-answers/resolvers/user-answers.resolver';

export const userRoutes: Routes = [
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
              import('./user-questions/user-questions.component').then(
                ({ UserQuestionsComponent }) => UserQuestionsComponent
              ),
            resolve: {
              questions: UserQuestionsResolver
            }
          },
          {
            path: 'answers',
            loadComponent: () =>
              import('./user-answers/user-answers.component').then(({ UserAnswersComponent }) => UserAnswersComponent),
            resolve: {
              answers: UserAnswersResolver
            }
          }
        ]
      }
    ]
  }
];
