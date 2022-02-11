import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Question } from '@shared/models/question.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserQuestionsComponent implements OnInit {
  questions!: Observable<Question[]>;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userId = Number(
      this.route.snapshot.parent!.parent!.paramMap.get('userId')
    );
    this.questions = this.userService.getUserQuestions(userId);
  }
}
