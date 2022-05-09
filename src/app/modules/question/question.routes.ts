import { Routes } from '@angular/router';

import { QuestionComponent } from './question.component';
import { QuestionResolver } from './resolvers/question.resolver';
import { QuestionTitleResolver } from '@modules/question/resolvers/question-title.resolver';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      question: QuestionResolver
    },
    children: [
      {
        path: '',
        component: QuestionComponent,
        title: QuestionTitleResolver
      }
    ]
  }
];
