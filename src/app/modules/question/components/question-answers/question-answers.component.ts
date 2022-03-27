import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterViewInit,
  ViewChildren,
  QueryList,
  OnDestroy
} from '@angular/core';
import { AnswerService } from '@shared/services/answer.service';
import { Observable, tap } from 'rxjs';
import { Answer } from '@shared/models/answer.model';
import { ActivatedRoute } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { AnswerItemComponent } from '@modules/question/components/question-answers/answer-item/answer-item.component';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswersComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input('acceptedAnswerId') acceptedAnswerId?: number;
  @ViewChildren(AnswerItemComponent) items!: QueryList<AnswerItemComponent>;

  answers$!: Observable<Answer[]>;

  sortItems = [
    {
      value: 0,
      viewValue: 'Eklenme tarihi (en yeni)'
    },
    {
      value: 1,
      viewValue: 'Eklenme tarihi (en eski)'
    },
    {
      value: 2,
      viewValue: 'En iyi yorumlar'
    }
  ];

  selectedIndex = 0;

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

  // TODO Subscribe normal sartlarda otomatik kapaniyor ama xhr hatalarinda test edilmedi.
  ngAfterViewInit() {
    const { fragment } = this.route.snapshot;

    if (fragment) {
      const { documentElement } = document;
      documentElement.style.scrollBehavior = 'smooth';
      this.scroll.setOffset([0, 64]);
      this.items.changes.subscribe((_) => {
        this.scroll.scrollToAnchor(`answer-${fragment}`);
      });
    }
  }

  ngOnDestroy() {
    document.documentElement.style.scrollBehavior = '';
  }

  changeSelectedIndex(index: number) {
    this.selectedIndex = index;
  }
}
