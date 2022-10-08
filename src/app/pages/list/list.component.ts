import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { AuthService } from '@auth/auth.service';
import { ListService } from './list.service';
import { RelativeTimeFormatPipe } from '@shared/pipes/relative-time-format.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RelativeTimeFormatPipe, MatIconModule, MatDividerModule, NgForOf, AsyncPipe, NgIf, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  questions$!: Observable<Question[]>;

  isLoggedIn$!: Observable<boolean>;

  constructor(private listService: ListService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    if (this.authService.userValue) {
      this.questions$ = this.listService.getMyQuestions().pipe(shareReplay());
    }
  }
}
