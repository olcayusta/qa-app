import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommentService } from '@shared/services/comment.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentFormComponent implements OnInit {
  commentControl: FormControl = new FormControl('');

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
  }

  saveComment() {
    this.commentService.addComment(this.commentControl.value, 121).subscribe((comment) => {
      alert('Yorum kaydedildi!');
    });
  }
}
