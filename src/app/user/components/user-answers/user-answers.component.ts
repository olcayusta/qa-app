import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Answer } from '@shared/models/answer.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-answers',
  templateUrl: './user-answers.component.html',
  styleUrls: ['./user-answers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAnswersComponent implements OnInit {
  answers!: Answer[];

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.answers = this.route.snapshot.data['answers'];
  }
}
