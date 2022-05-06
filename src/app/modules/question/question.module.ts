import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnswerListComponent } from './components/answer-list/answer-list.component';
import { MatDividerModule } from '@angular/material/divider';
import { AnswerFormComponent } from './components/answer-form/answer-form.component';
import { SharedModule } from '@shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { AnswerItemComponent } from './components/answer-list/answer-item/answer-item.component';
import { MatMenuModule } from '@angular/material/menu';
import { QuestionTextComponent } from './components/question-text/question-text.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeroDelayDirective } from './directives/hero-delay.directive';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommentListItemComponent } from './components/comment-list/comment-list-item/comment-list-item.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DeepLazyDirective } from './directives/deep-lazy.directive';
import { EditorButtonsComponent } from './components/answer-form/components/editor-buttons/editor-buttons.component';
import { MaterialIconModule } from '../../material-icon/material-icon.module';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { AnswerItemCommentListComponent } from './components/answer-list/answer-item/answer-item-comment-list/answer-item-comment-list.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    QuestionComponent,
    AnswerListComponent,
    AnswerFormComponent,
    CommentListComponent,
    AnswerItemComponent,
    QuestionTextComponent,
    HeroDelayDirective,
    CommentListItemComponent,
    DeepLazyDirective,
    EditorButtonsComponent,
    CommentFormComponent,
    AnswerItemCommentListComponent
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
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MaterialIconModule,
    MatDialogModule
  ]
})
export class QuestionModule {}
