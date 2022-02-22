import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateQuestionComponent } from './create-question.component';
import { environment } from '@environments/environment';

const routes: Routes = [{ path: '', component: CreateQuestionComponent, title: `Soru Sor - ${environment.appTitle}` }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateQuestionRoutingModule {
}