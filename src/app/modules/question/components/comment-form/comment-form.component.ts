import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommentService } from '@shared/services/comment.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@modules/material/material.module';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'inek-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, MatInputModule]
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
