import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home-question-list-item-avatar',
  templateUrl: './home-question-list-item-avatar.component.html',
  styleUrls: ['./home-question-list-item-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeQuestionListItemAvatarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
