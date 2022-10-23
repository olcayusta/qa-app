import { Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { userResolverFn } from './user.resolver';
import { userTitleResolverFn } from './resolvers/user-title.resolver';
import { UserQuestionsResolver } from './components/user-questions/user-questions.resolver';
import { UserAnswersResolver } from './components/user-answers/user-answers.resolver';


export default [
  {
    path: '',
    component: UserComponent,
    resolve: {
      user: userResolverFn
    },
    children: [
      {
        path: '',
        title: userTitleResolverFn,
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
