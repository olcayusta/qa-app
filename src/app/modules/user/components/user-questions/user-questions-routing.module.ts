import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserQuestionsComponent } from './user-questions.component';

const routes: Routes = [{ path: '', component: UserQuestionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserQuestionsRoutingModule {}
