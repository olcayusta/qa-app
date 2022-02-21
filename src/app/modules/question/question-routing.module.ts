import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionComponent } from './question.component';
import { QuestionResolver } from './resolvers/question.resolver';
import { QuestionTitleResolver } from '@modules/question/resolvers/question-title.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { question: QuestionResolver },
    children: [
      {
        path: '',
        component: QuestionComponent,
        title: QuestionTitleResolver
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule {}
