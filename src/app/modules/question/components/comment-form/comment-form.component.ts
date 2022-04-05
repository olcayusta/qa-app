import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommentService } from '@shared/services/comment.service';

@Component({
  selector: 'inek-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentFormComponent implements OnInit {
  commentControl: FormControl = new FormControl('');

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  saveComment() {
    this.commentService.addComment(this.commentControl.value, 121).subscribe((comment) => {
      alert('Yorum kaydedildi!');
    });
  }
}
