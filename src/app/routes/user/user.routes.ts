import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserResolver } from './user.resolver';
import { UserTitleResolver } from './resolvers/user-title.resolver';
import { UserQuestionsResolver } from './components/user-questions/user-questions.resolver';
import { UserAnswersResolver } from './components/user-answers/user-answers.resolver';
import { UserService } from './user.service';
import { inject } from '@angular/core';

export default [
  {
    path: '',
    component: UserComponent,
    resolve: {
      user: (route: ActivatedRouteSnapshot) => inject(UserService).getUser(Number(route.paramMap.get('userId')))
    },
    children: [
      {
        path: '',
        title: UserTitleResolver,
        children: [
          {
            path: 'questions',
            loadComponent: () => import('./components/user-questions/user-questions.component'),
            resolve: {
              questions: UserQuestionsResolver
            }
          },
          {
            path: 'answers',
            loadComponent: () => import('./components/user-answers/user-answers.component'),
            resolve: {
              answers: UserAnswersResolver
            }
          }
        ]
      }
    ]
  }
] as Routes;
