import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit(): void {}

  /**
   * Submit feedback form
   * @param $event
   */
  onFormSubmit($event: SubmitEvent) {
    console.log('Form submitted!');
  }
}
