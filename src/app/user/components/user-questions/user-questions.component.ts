import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Question } from '@models/question.model';
import { NgForOf } from '@angular/common';
import { getSnapshotData } from '../../../core/router.utils';

@Component({
  selector: 'app-user-questions',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class UserQuestionsComponent {
  questions: Question[] = <Question[]>getSnapshotData('questions');
}
