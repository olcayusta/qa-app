import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent implements OnInit {
  question$!: Observable<Question>;

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService,
    private stateService: StateService,
    private favoriteService: FavoriteService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.question$ = this.route.data.pipe(
      map((data) => {
        const { question } = data as { question: Question };
        return question;
      })
    );

    this.stateService.hide();
  }

  addToFavorite(questionId: number): void {
    this.favoriteService.addToFavorite(questionId).subscribe((value) => {
      console.log(value);
    });
  }

  /*
   * Open Share Dialog
   * */
  openDialog() {
    const dialog = this.dialog.open(ShareDialogComponent, {
      autoFocus: false,
      minWidth: 512,
    });
    dialog.afterClosed().subscribe((result) => {
      result && this.snackBar.open('Bağlantı panoya kopyalandı');
    });
  }
}
