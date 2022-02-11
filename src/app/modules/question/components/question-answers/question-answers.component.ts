import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AnswerService } from '@shared/services/answer.service';
import { Observable } from 'rxjs';
import { Answer } from '@shared/models/answer.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionAnswersComponent implements OnInit {
  answers$!: Observable<Answer[]>;

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {
    const questionId = this.route.snapshot.paramMap.get('questionId');
    this.answers$ = this.answerService.getAnswers(Number(questionId));
  }
}
