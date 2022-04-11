import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { ListService } from '@modules/list/services/list.service';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { AuthService } from '@auth/auth.service';

@Component({
  selector: 'id-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  questions$!: Observable<Question[]>;
  isLoggedIn$!: Observable<boolean>;

  constructor(
    private listService: ListService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    if (this.authService.userValue) {
      this.questions$ = this.listService.getMyQuestions().pipe(shareReplay());
    }
  }
}
