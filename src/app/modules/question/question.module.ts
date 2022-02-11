import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { QuestionContentComponent } from './components/question-content/question-content.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionAnswersComponent } from './components/question-answers/question-answers.component';
import { MatDividerModule } from '@angular/material/divider';
import { AnswerFormComponent } from './components/answer-form/answer-form.component';
import { SharedModule } from '@shared/shared.module';
import { WebCopyCodeComponent } from './components/web-copy-code/web-copy-code.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuestionCommentListComponent } from './components/question-comment-list/question-comment-list.component';
import { QuestionAnswerItemComponent } from './components/question-answer-item/question-answer-item.component';
import { QuestionAnswerItemContentComponent } from './components/question-answer-item/question-answer-item-content/question-answer-item-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PrivateHighlightDirective } from './directives/private-highlight.directive';
import { DevsiteCodeComponent } from './components/devsite-code/devsite-code.component';
import { CodeHighlightDirective } from './directives/code-highlight.directive';
import { QuestionTextComponent } from './components/question-text/question-text.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { HeroDelayDirective } from './directives/hero-delay.directive';

@NgModule({
  declarations: [
    QuestionComponent,
    QuestionContentComponent,
    QuestionAnswersComponent,
    AnswerFormComponent,
    WebCopyCodeComponent,
    QuestionCommentListComponent,
    QuestionAnswerItemComponent,
    QuestionAnswerItemContentComponent,
    PrivateHighlightDirective,
    DevsiteCodeComponent,
    CodeHighlightDirective,
    QuestionTextComponent,
    HeroCardComponent,
    HeroDelayDirective,
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
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
  ],
})
export class QuestionModule {}
