import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'qa-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionTextComponent implements OnInit {
  @Input() content!: string;

  constructor() {}

  ngOnInit(): void {}
}
