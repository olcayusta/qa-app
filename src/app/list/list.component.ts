import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { AuthService } from '@auth/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListService } from './list.service';
import { RelativeTimeFormatPipe } from '@shared/pipes/relative-time-format.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule, RelativeTimeFormatPipe, MatIconModule, MatDividerModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  questions$!: Observable<Question[]>;

  isLoggedIn$!: Observable<boolean>;

  constructor(private listService: ListService, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    if (this.authService.userValue) {
      this.questions$ = this.listService.getMyQuestions().pipe(shareReplay());
    }
  }
}
