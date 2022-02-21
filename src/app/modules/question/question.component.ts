import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewChild,
  ɵmarkDirty as markDirty
} from '@angular/core';
import { Question } from '@shared/models/question.model';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '@shared/services/answer.service';
import { StateService } from '@shared/services/state.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FavoriteService } from '@shared/services/favorite.service';
import { MatDialog } from '@angular/material/dialog';
import { ShareDialogComponent } from '@shared/components/share-dialog/share-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay, OverlayRef, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { AuthService } from '@auth/auth.service';
import { ComponentPortal } from '@angular/cdk/portal';
import { SafeHtml } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { FacebookComponent } from '../../facebook/facebook.component';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnInit, OnDestroy {
  question$!: Observable<Question>;
  loggedIn!: boolean;

  popupOpened = false;

  overlayRef!: OverlayRef;

  @ViewChild('trigger', { read: ElementRef }) trigger!: ElementRef;

  jsonLD!: SafeHtml;

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService,
    private stateService: StateService,
    private favoriteService: FavoriteService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private sso: ScrollStrategyOptions,
    private authService: AuthService,
    private overlay: Overlay,
    @Inject(DOCUMENT) private document: Document
  ) {
    if (this.authService.userValue) {
      this.loggedIn = true;
    }
  }

  ngOnInit(): void {
    this.document.body.setAttribute('itemscope', '');
    this.document.body.setAttribute('itemtype', 'https://schema.org/QAPage');

    this.question$ = this.route.data.pipe(
      map((data) => {
        return (<{ question: Question }>data).question;
      })
    );

    // this.stateService.hide();
  }

  ngOnDestroy() {
    this.document.body.removeAttribute('itemscope');
    this.document.body.removeAttribute('itemtype');
  }

  addToFavorite(questionId: number): void {
    this.favoriteService.addToFavorite(questionId).subscribe((value) => {
      console.log(value);
    });
  }

  /**
   * Open share dialog
   */
  async openShareDialog() {
    const { ShareDialogComponent: component } = await import(
      '@shared/components/share-dialog/share-dialog.component'
    );
    this.dialog
      .open(component, {
        minWidth: 512,
        scrollStrategy: this.sso.close(),
        autoFocus: false
      })
      .afterClosed()
      .subscribe((result) => {
        result && this.snackBar.open('Bağlantı panoya kopyalandı');
      });

    /*    const dialog = this.dialog.open(ShareDialogComponent, {
          autoFocus: false,
          minWidth: 512
        });
        dialog.afterClosed().subscribe((result) => {
          result && this.snackBar.open('Bağlantı panoya kopyalandı');
        });*/
  }

  createOverlay() {
    if (this.overlayRef) {
      this.overlayRef.detach();
      /*      const userProfilePortal = new ComponentPortal(MessageArchivedComponent);
      this.overlayRef.attach(userProfilePortal);*/
    } else {
      this.overlayRef = this.overlay.create({
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
      const userProfilePortal = new ComponentPortal(FacebookComponent);
      this.overlayRef.attach(userProfilePortal);
    }
  }

  likeQuestion() {}
}
