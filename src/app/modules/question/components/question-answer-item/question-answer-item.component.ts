import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Answer } from '@shared/models/answer.model';
import { AnswerService } from '@shared/services/answer.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-question-answer-item',
  templateUrl: './question-answer-item.component.html',
  styleUrls: ['./question-answer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswerItemComponent {
  @Input() answer!: Answer;
  @Input() acceptedAnswer!: boolean;
  @Input() questionId!: number;

  constructor(
    private answerService: AnswerService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  acceptAnswer() {
    const questionId = Number(this.route.snapshot.paramMap.get('questionId'));
    this.answerService.acceptAnswer(this.answer.id, questionId).subscribe((value) => {
      this.snackBar.open('Doğru cevap olarak işaretlendi')
    });
  }
}
