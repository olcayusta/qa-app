import { Route } from '@angular/router';
import { UserTitleResolver } from './resolvers/user-title.resolver';
import { UserQuestionsResolver } from './components/user-questions/resolvers/user-questions.resolver';
import { UserAnswersResolver } from './components/user-answers/resolvers/user-answers.resolver';
import { UserComponent } from './user.component';
import { UserResolver } from './resolvers/user.resolver';

export const ROUTES: Route[] = [
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
              import('./components/user-questions/user-questions.component').then(
                ({ UserQuestionsComponent }) => UserQuestionsComponent
              ),
            resolve: {
              questions: UserQuestionsResolver
            }
          },
          {
            path: 'answers',
            loadComponent: () =>
              import('./components/user-answers/user-answers.component').then(
                ({ UserAnswersComponent }) => UserAnswersComponent
              ),
            resolve: {
              answers: UserAnswersResolver
            }
          }
        ]
      }
    ]
  }
];
