import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionAnswersComponent } from './components/question-answers/question-answers.component';
import { MatDividerModule } from '@angular/material/divider';
import { AnswerFormComponent } from './components/answer-form/answer-form.component';
import { SharedModule } from '@shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuestionCommentListComponent } from './components/question-comment-list/question-comment-list.component';
import { QuestionAnswerItemComponent } from './components/question-answer-item/question-answer-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { QuestionTextComponent } from './components/question-text/question-text.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeroDelayDirective } from './directives/hero-delay.directive';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    QuestionComponent,
    QuestionAnswersComponent,
    AnswerFormComponent,
    QuestionCommentListComponent,
    QuestionAnswerItemComponent,
    QuestionTextComponent,
    HeroDelayDirective
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    SharedModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class QuestionModule {}
