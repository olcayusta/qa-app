import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { Question } from '@shared/models/question.model';
import { Subscription } from 'rxjs';
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

  /**
   * Number of questions to load as you scroll down the page
   */
  offset = 12;

  /**
   * Subscription to the route params
   */
  recentQuestionsSubscription!: Subscription;

  /**
   * Subscription to the load more questions
   */
  loadMoreSubscription!: Subscription;

  /**
   * Spinner to show when loading more questions
   */
  loader = false;

  /**
   * Spinner hide load questions finished
   */
  dataFinished = false;

  constructor(
    private questionService: QuestionService,
    private filterService: FilterService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.recentQuestionsSubscription = this.route.queryParamMap
      .pipe(
        switchMap((value) => {
          return this.filterService.getQuestionsByFiltered(value.get('sort'), value.get('filter'));
        })
      )
      .subscribe((questions) => {
        this.questions = questions;
        this.cd.markForCheck();
      });
  }

  ngOnDestroy(): void {
    /**
     * Subscription if not unsubscribed, will cause memory leak,
     * so we unsubscribe here
     */
    !this.recentQuestionsSubscription.closed && this.recentQuestionsSubscription.unsubscribe();

    /**
     * Same as above
     * It's a little different as it will be created if there is a subscription scroll
     */
    if (this.loadMoreSubscription?.closed === false) {
      this.loadMoreSubscription.unsubscribe();
    }
  }

  /**
   * Load more questions is called when the user scrolls down the page
   */
  loadMore(): void {
    this.loader = true;
    this.recentQuestionsSubscription = this.questionService
      .getMoreQuestions(this.offset)
      .pipe(delay(400))
      .subscribe((questions) => {
        this.loader = false;
        if (questions.length) {
          this.offset += 6;
          this.questions = [...this.questions, ...questions];
        } else {
          this.dataFinished = true;
        }
        this.cd.markForCheck();
      });
  }
}
