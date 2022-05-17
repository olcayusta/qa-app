import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forum-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'forum.svg',
  styleUrls: ['./forum-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForumIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
