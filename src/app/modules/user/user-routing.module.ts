import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { UserResolver } from './resolvers/user.resolver';
import { UserTitleResolver } from '@modules/user/resolvers/user-title.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    resolve: { user: UserResolver },
    children: [
      {
        path: '',
        title: UserTitleResolver
      },
      {
        path: 'questions',
        loadChildren: () =>
          import('./components/user-questions/user-questions.module').then(
            (m) => m.UserQuestionsModule
          )
      },
      {
        path: 'answers',
        loadChildren: () =>
          import('./components/user-answers/user-answers.module').then((m) => m.UserAnswersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
