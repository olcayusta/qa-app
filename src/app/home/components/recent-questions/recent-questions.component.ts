import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ɵmarkDirty as markDirty,
  OnDestroy,
} from '@angular/core';
import { QuestionService } from '@modules/question/services/question.service';
import { Question } from '@shared/models/question.model';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '@shared/services/filter.service';
import { Observable, Subscription } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'qa-recent-questions',
  templateUrl: './recent-questions.component.html',
  styleUrls: ['./recent-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentQuestionsComponent implements OnInit, OnDestroy {
  questions!: Question[];
  questions$!: Observable<Question[]>;

  offset = 12;

  subscription!: Subscription;

  loader = false;
  dataFinished = false;

  constructor(
    private questionService: QuestionService,
    private filterService: FilterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.queryParamMap
      .pipe(
        switchMap((value) =>
          this.filterService.getQuestionsByFiltered(
            value.get('sort') as string,
            value.get('filter') as string
          )
        )
      )
      .subscribe((value) => {
        this.questions = value;
        markDirty(this);
      });
  }

  ngOnDestroy(): void {
    /**
     * Abone olunmus bir akis varsa, bu akisin aboneligini kapat.
     */
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // TODO
  // ilk yukleme yapilirken, ekranda loading belirdigi icin, questions undefined hatasi var
  // fixlenicek
  loadMore(): void {
    if (this.questions) {
      this.loader = true;
      this.questionService
        .getMoreQuestions(this.offset)
        .pipe(delay(400))
        .subscribe((value) => {
          this.loader = false;
          markDirty(this);
          if (value.length > 0) {
            this.offset += 6;
            this.questions = [...this.questions, ...value];
            markDirty(this);
          } else {
            console.warn('data bitti!..');
            this.dataFinished = true;
          }
        });
    } else {
      console.warn('Veri bulunamadi!');
    }
  }
}
