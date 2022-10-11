import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { ActivatedRoute } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-user-questions',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class UserQuestionsComponent implements OnInit {
  questions!: Question[];

  data = inject(ActivatedRoute).snapshot.data['questions'];

  ngOnInit(): void {
    // const userId = Number(this.route.snapshot.parent!.parent!.paramMap.get('userId'));
    this.questions = this.data;
    // this.questions = this.userService.getUserQuestions(userId);
  }
}
