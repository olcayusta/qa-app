import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Comment } from '@shared/models/comment.model';
import { CommentService } from '@shared/services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent implements OnInit {
  comments$!: Observable<Comment[]>;

  constructor(private route: ActivatedRoute, private commentService: CommentService) {}

  ngOnInit(): void {
    const questionId = this.route.snapshot.paramMap.get('questionId');
    this.comments$ = this.commentService.getComments(Number(questionId));
  }
}
