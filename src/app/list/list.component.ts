import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { AuthService } from '@auth/auth.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ListService } from './services/list.service';

@Component({
  selector: 'id-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MatDividerModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
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
