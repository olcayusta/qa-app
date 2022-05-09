import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Comment } from '@shared/models/comment.model';
import { MaterialModule } from '@modules/material/material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'inek-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MaterialModule, RouterModule, SharedModule]
})
export class CommentListItemComponent implements OnInit {
  @Input() comment!: Comment;

  constructor() {}

  ngOnInit(): void {}
}
