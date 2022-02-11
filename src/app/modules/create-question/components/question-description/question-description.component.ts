import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-question-description',
  templateUrl: './question-description.component.html',
  styleUrls: ['./question-description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionDescriptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
