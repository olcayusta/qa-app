import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'inek-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionTextComponent {
  @Input() content!: string;
}
