import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserResolver } from './resolvers/user.resolver';
import { UserTitleResolver } from './resolvers/user-title.resolver';
import { UserQuestionsResolver } from './components/user-questions/resolvers/user-questions.resolver';
import { UserAnswersResolver } from './components/user-answers/resolvers/user-answers.resolver';

const routes: Routes = [
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
            loadComponent: async () =>
              (await import('./components/user-questions/user-questions.component')).UserQuestionsComponent,
            resolve: {
              questions: UserQuestionsResolver
            }
          },
          {
            path: 'answers',
            loadComponent: async () =>
              (await import('./components/user-answers/user-answers.component')).UserAnswersComponent,
            resolve: {
              answers: UserAnswersResolver
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
