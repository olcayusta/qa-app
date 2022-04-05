import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '@shared/models/comment.model';
import { CommentService } from '@shared/services/comment.service';

@Component({
  selector: 'inek-answer-item-comment-list',
  templateUrl: './answer-item-comment-list.component.html',
  styleUrls: ['./answer-item-comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerItemCommentListComponent implements OnInit {
  @Input() answerId!: number;
  comments$!: Observable<Comment[]>;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.comments$ = this.commentService.getAnswerComments(this.answerId);
  }
}
