import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Answer } from '@shared/models/answer.model';

@Component({
  selector: 'app-question-answer-item',
  templateUrl: './question-answer-item.component.html',
  styleUrls: ['./question-answer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionAnswerItemComponent {
  @Input() answer!: Answer;
  @Input() acceptedAnswer!: boolean;
}
