import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAnswersComponent } from './user-answers.component';

const routes: Routes = [{ path: '', component: UserAnswersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAnswersRoutingModule {}
