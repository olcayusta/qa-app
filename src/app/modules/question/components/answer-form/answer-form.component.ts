import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ɵmarkDirty as markDirty,
  AfterViewInit,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '@shared/services/answer.service';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnswerFormComponent implements OnInit, AfterViewInit {
  answerControl: FormControl = new FormControl('', {
    validators: [Validators.required, Validators.minLength(24)],
  });

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    markDirty(this);
  }

  /**
   * Create an answer
   */
  formSubmit(): void {
    const questionId = Number(this.route.snapshot.paramMap.get('questionId'));
    this.answerService
      .create(questionId, this.answerControl.value)
      .subscribe((value) => {
        console.log(value);
      });
  }
}
