import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Answer } from '@shared/models/answer.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-user-answers',
  templateUrl: './user-answers.component.html',
  styleUrls: ['./user-answers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, SharedModule, RouterModule]
})
export class UserAnswersComponent implements OnInit {
  answers!: Answer[];

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.answers = this.route.snapshot.data['answers'];
  }
}
