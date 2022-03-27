import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAnswersComponent } from './user-answers.component';
import { UserAnswersResolver } from '@modules/user/components/user-answers/resolvers/user-answers.resolver';

const routes: Routes = [
  { path: '', component: UserAnswersComponent, resolve: { answers: UserAnswersResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAnswersRoutingModule {}
