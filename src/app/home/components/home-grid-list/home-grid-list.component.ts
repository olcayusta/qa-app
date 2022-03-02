import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ɵmarkDirty as markDirty,
  OnDestroy
} from '@angular/core';
import { Question } from '@shared/models/question.model';
import { Observable, Subscription } from 'rxjs';
import { QuestionService } from '@modules/question/services/question.service';
import { FilterService } from '@shared/services/filter.service';
import { ActivatedRoute } from '@angular/router';
import { delay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'inek-home-grid-list',
  templateUrl: './home-grid-list.component.html',
  styleUrls: ['./home-grid-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeGridListComponent implements OnInit, OnDestroy {
  questions!: Question[];
  questions$!: Observable<Question[]>;

  /**
   * Number of questions to load as you scroll down the page
   */
  offset = 12;

  /**
   * Subscription to the route params
   */
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
        switchMap((value) => {
          return this.filterService.getQuestionsByFiltered(
            value.get('sort') as string,
            value.get('filter') as string
          );
        })
      )
      .subscribe((value) => {
        this.questions = value;
        markDirty(this);
      });
  }

  ngOnDestroy(): void {
    /**
     * Unsubscribe from the subscription
     */
    this.subscription && this.subscription.unsubscribe();
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
