import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit,
  ViewChildren,
  QueryList
} from '@angular/core';
import { AnswerService } from '@shared/services/answer.service';
import { Observable, tap } from 'rxjs';
import { Answer } from '@shared/models/answer.model';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { QuestionAnswerItemComponent } from '@modules/question/components/question-answer-item/question-answer-item.component';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswersComponent implements OnInit, AfterViewInit {
  answers$!: Observable<Answer[]>;
  @Input('acceptedAnswerId') acceptedAnswerId?: number;
  @ViewChildren(QuestionAnswerItemComponent) items!: QueryList<QuestionAnswerItemComponent>;

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService,
    private scroll: ViewportScroller
  ) {}

  ngOnInit(): void {
    const questionId = this.route.snapshot.paramMap.get('questionId');
    this.answers$ = this.answerService.getAnswers(Number(questionId)).pipe(
      tap((value) => {
        value.filter((value1) => (value1.id === 26 ? (value1.accepted = true) : null));
      })
    );
  }

  ngAfterViewInit() {
    const fragment = this.route.snapshot.fragment;
    this.scroll.setOffset([0, 64]);

    this.items.changes.subscribe((_) => {
      fragment && this.scroll.scrollToAnchor(`answer-${fragment}`);
    });
  }
}
