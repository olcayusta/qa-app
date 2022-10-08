import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Comment } from '@shared/models/comment.model';
import { MatDividerModule } from '@angular/material/divider';
import { RelativeTimeFormatPipe } from '@shared/pipes/relative-time-format.pipe';
import { ImgShadowComponent } from '@shared/components/img-shadow/img-shadow.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-comment-list-item',
  standalone: true,
  imports: [MatDividerModule, RelativeTimeFormatPipe, ImgShadowComponent, RouterLinkWithHref],
  templateUrl: './comment-list-item.component.html',
  styleUrls: ['./comment-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListItemComponent {
  @Input() comment!: Comment;
}
