import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Answer } from '@shared/models/answer.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RelativeTimeFormatPipe } from '@shared/pipes/relative-time-format.pipe';

@Component({
  selector: 'app-user-answers',
  standalone: true,
  imports: [CommonModule, RouterModule, RelativeTimeFormatPipe],
  templateUrl: './user-answers.component.html',
  styleUrls: ['./user-answers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAnswersComponent implements OnInit {
  answers!: Answer[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.answers = this.route.snapshot.data['answers'];
  }
}
