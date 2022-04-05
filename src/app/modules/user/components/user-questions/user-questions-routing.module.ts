import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserQuestionsComponent } from './user-questions.component';
import { UserQuestionsResolver } from '@modules/user/components/user-questions/resolvers/user-questions.resolver';

const routes: Routes = [
  {
    path: '',
    component: UserQuestionsComponent,
    resolve: {
      questions: UserQuestionsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserQuestionsRoutingModule {}
