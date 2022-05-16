import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Comment } from '@shared/models/comment.model';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { RelativeTimeFormatPipe } from '@shared/pipes/relative-time-format.pipe';
import { ImgShadowComponent } from '@shared/components/img-shadow/img-shadow.component';

@Component({
  selector: 'app-comment-list-item',
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule, MatDividerModule, RelativeTimeFormatPipe, ImgShadowComponent]
})
export class CommentListItemComponent implements OnInit {
  @Input() comment!: Comment;

  constructor() {}

  ngOnInit(): void {}
}
