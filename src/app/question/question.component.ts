import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Question } from '@shared/models/question.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AnswerService } from '@shared/services/answer.service';
import { StateService } from '@shared/services/state.service';
import { Observable, Subscription, tap } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ShareDialogComponent } from '@shared/components/share-dialog/share-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay, OverlayRef, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { AuthService } from '@auth/auth.service';
import { TemplatePortal } from '@angular/cdk/portal';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FlagDialogComponent } from '@dialogs/flag-dialog/flag-dialog.component';
import { SocketService } from '@shared/services/socket.service';
import { VoteService } from '@shared/services/vote.service';
import { FavoriteService } from 'src/app/favorites/favorite.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialIconModule } from '../material-icon/material-icon.module';
import { AnswerListComponent } from './components/answer-list/answer-list.component';
import { AnswerFormComponent } from './components/answer-form/answer-form.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { AnswerItemComponent } from './components/answer-list/answer-item/answer-item.component';
import { QuestionTextComponent } from './question-text/question-text.component';
import { HeroDelayDirective } from './directives/hero-delay.directive';
import { CommentListItemComponent } from './components/comment-list-item/comment-list-item.component';
import { DeepLazyDirective } from './directives/deep-lazy.directive';
import { EditorButtonsComponent } from './components/answer-form/editor-buttons/editor-buttons.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { AnswerItemCommentListComponent } from './components/answer-list/answer-item/answer-item-comment-list/answer-item-comment-list.component';
import { MatCardModule } from '@angular/material/card';
import { ImgShadowComponent } from '@shared/components/img-shadow/img-shadow.component';
import { RelativeTimeFormatPipe } from '@shared/pipes/relative-time-format.pipe';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialIconModule,
    AnswerListComponent,
    AnswerFormComponent,
    CommentListComponent,
    AnswerItemComponent,
    QuestionTextComponent,
    HeroDelayDirective,
    CommentListItemComponent,
    DeepLazyDirective,
    EditorButtonsComponent,
    CommentFormComponent,
    AnswerItemCommentListComponent,
    ImgShadowComponent,
    RelativeTimeFormatPipe,
    MatCardModule,
    MatDialogModule
  ],
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnInit, OnDestroy {
  question$!: Observable<Question>;

  questionId!: number;

  popupOpened = false;

  overlayRef!: OverlayRef;

  @ViewChild('trigger', { read: ElementRef }) trigger!: ElementRef;
  @ViewChild('loginPopup') loginPopup!: TemplateRef<any>;

  subA!: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
    private answerService: AnswerService,
    private stateService: StateService,
    private favoriteService: FavoriteService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private sso: ScrollStrategyOptions,
    private authService: AuthService,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private socketService: SocketService,
    private voteService: VoteService
  ) {}

  initializeSchema() {
    this.document.body.setAttribute('itemscope', '');
    this.document.body.setAttribute('itemtype', 'https://schema.org/QAPage');
  }

  destroySchema() {
    this.document.body.removeAttribute('itemscope');
    this.document.body.removeAttribute('itemtype');
  }

  ngOnInit(): void {
    this.initializeSchema();
    this.question$ = this.route.data.pipe(
      map((data) => data['question']),
      tap(({ id: questionId }) => {
        this.questionId = questionId;
        this.subA = this.socketService.watch('watch', `q:${questionId}`).subscribe((messageForA) => {
          console.log(messageForA);
          this.snackBar.open('1 yeni cevap gönderildi', 'TAMAM');
        });
      }),
      shareReplay()
    );

    // this.stateService.hide();
  }

  ngOnDestroy() {
    this.destroySchema();
    this.subA.unsubscribe();
  }

  /**
   * Soruyu kullanicinin favorilerine ekler.
   * @param questionId
   */
  addToFavoriteToQuestion(questionId: number): void {
    this.snackBar.open('Bu soruyu bir favori listesine eklemek için oturum açın', 'TAMAM');
    /*   this.favoriteService.addToFavorite(questionId).subscribe((value) => {
      console.log(value);
    });*/
  }

  async openShareDialog() {
    const { ShareDialogComponent } = await import('@shared/components/share-dialog/share-dialog.component');
    this.dialog
      .open(ShareDialogComponent, {
        minWidth: 360,
        maxWidth: 560,
        scrollStrategy: this.sso.close(),
        autoFocus: false
      })
      .afterClosed()
      .subscribe((result) => {
        result && this.snackBar.open('Bağlantı panoya kopyalandı');
      });
  }

  createPopup() {
    if (!this.overlayRef?.hasAttached()) {
      this.overlayRef = this.overlay.create({
        scrollStrategy: this.sso.block(),
        positionStrategy: this.overlay
          .position()
          .flexibleConnectedTo(this.trigger)
          .withPositions([
            {
              originX: 'start',
              originY: 'bottom',
              overlayX: 'start',
              overlayY: 'top'
            }
          ])
      });
      const userProfilePortal = new TemplatePortal(this.loginPopup, this.vcr);
      this.overlayRef.attach(userProfilePortal);
      this.overlayRef.outsidePointerEvents().subscribe((value) => {
        this.overlayRef.dispose();
      });
    }
  }

  /**
   * Like question event
   */
  likeQuestion() {}

  /**
   * Open login dialog
   */
  openLogInPopup() {
    // this.createPopup();
  }

  async openFlagDialog() {
    const { FlagDialogComponent } = await import('@dialogs/flag-dialog/flag-dialog.component');
    this.dialog.open(FlagDialogComponent, {
      autoFocus: false,
      minWidth: 560
    });
  }

  voteQuestion() {
    this.voteService.upvoteQuestion(this.questionId).subscribe((value) => {
      console.log(value);
    });
  }
}
