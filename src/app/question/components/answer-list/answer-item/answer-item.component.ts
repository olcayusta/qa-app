import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Answer } from '@shared/models/answer.model';
import { AnswerService } from '@shared/services/answer.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedModule } from '@shared/shared.module';
import { AnswerItemCommentListComponent } from './answer-item-comment-list/answer-item-comment-list.component';
import { HeroDelayDirective } from '../../../directives/hero-delay.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-answer-item',
  templateUrl: './answer-item.component.html',
  styleUrls: ['./answer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AnswerItemCommentListComponent,
    HeroDelayDirective,
    SharedModule,
    RouterModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class AnswerItemComponent {
  @Input() answer!: Answer;
  @Input() acceptedAnswer!: boolean;
  @Input() questionId!: number;

  constructor(private answerService: AnswerService, private route: ActivatedRoute, private snackBar: MatSnackBar) {}

  acceptAnswer() {
    const questionId = Number(this.route.snapshot.paramMap.get('questionId'));
    this.answerService.acceptAnswer(this.answer.id, questionId).subscribe((value) => {
      this.snackBar.open('Doğru cevap olarak işaretlendi');
    });
  }
}
