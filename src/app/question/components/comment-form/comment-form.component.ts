import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommentService } from '@shared/services/comment.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule]
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
