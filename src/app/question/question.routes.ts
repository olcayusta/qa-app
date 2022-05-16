import { Routes } from '@angular/router';
import { QuestionComponent } from './question.component';
import { QuestionResolver } from './question.resolver';
import { QuestionTitleResolver } from './question-title.resolver';

export const questionRoutes: Routes = [
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
