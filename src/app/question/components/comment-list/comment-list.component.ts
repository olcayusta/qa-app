import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Comment } from '@shared/models/comment.model';
import { CommentService } from '@shared/services/comment.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CommentListItemComponent } from './comment-list-item/comment-list-item.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, CommentListItemComponent, CommentFormComponent, MatProgressSpinnerModule, MatDividerModule]
})
export class CommentListComponent implements OnInit {
  comments$!: Observable<Comment[]>;

  constructor(private route: ActivatedRoute, private commentService: CommentService) {}

  ngOnInit(): void {
    const questionId = this.route.snapshot.paramMap.get('questionId');
    this.comments$ = this.commentService.getComments(Number(questionId));
  }
}
