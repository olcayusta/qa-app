import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class UserQuestionsComponent implements OnInit {
  questions!: Question[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // const userId = Number(this.route.snapshot.parent!.parent!.paramMap.get('userId'));
    this.questions = this.route.snapshot.data['questions'];
    console.log(this.questions);
    // this.questions = this.userService.getUserQuestions(userId);
  }
}
