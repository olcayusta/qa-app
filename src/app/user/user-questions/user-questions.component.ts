import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-questions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserQuestionsComponent implements OnInit {
  questions!: Question[];

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    // const userId = Number(this.route.snapshot.parent!.parent!.paramMap.get('userId'));
    this.questions = this.route.snapshot.data['questions'];
    console.log(this.questions);
    // this.questions = this.userService.getUserQuestions(userId);
  }
}
