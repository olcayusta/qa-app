import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatDialogModule, FormsModule, MatDialogModule],
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackDialogComponent implements OnInit {
  feedbackForm!: FormGroup;

  formControl = new FormControl(null, {
    updateOn: 'submit',
    validators: [Validators.required]
  });

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({ feedbackText: [null, Validators.required] }, { updateOn: 'submit' });
  }

  ngOnInit() {}

  sendFeedback($event: SubmitEvent) {
    console.log('Form submitted!');
  }
}
