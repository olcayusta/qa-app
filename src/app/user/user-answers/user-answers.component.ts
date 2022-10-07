import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { Answer } from '@shared/models/answer.model';
import { ActivatedRoute, RouterLinkWithHref } from '@angular/router';
import { RelativeTimeFormatPipe } from '@shared/pipes/relative-time-format.pipe';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-user-answers',
  standalone: true,
  imports: [RelativeTimeFormatPipe, NgForOf, RouterLinkWithHref],
  templateUrl: './user-answers.component.html',
  styleUrls: ['./user-answers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class UserAnswersComponent implements OnInit {
  answers!: Answer[];
  data = inject(ActivatedRoute).snapshot.data;

  ngOnInit(): void {
    this.answers = this.data['answers'];
  }
}
