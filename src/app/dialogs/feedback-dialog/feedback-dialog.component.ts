import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MaterialModule } from '@modules/material/material.module';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'inek-feedback-dialog',
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
    this.feedbackForm = this.fb.group(
      {
        feedbackText: [null, Validators.required]
      },
      {
        updateOn: 'submit'
      }
    );
  }

  ngOnInit() {
  }

  sendFeedback($event: SubmitEvent) {
    console.log('Form submitted!');
  }
}

@NgModule({
  declarations: [FeedbackDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatDialogModule
  ]
})
class FeedbackDialogModule {
}
