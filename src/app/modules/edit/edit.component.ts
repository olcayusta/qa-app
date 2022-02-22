import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { QuestionService } from '@modules/question/services/question.service';
import { Question } from '@shared/models/question.model';
import { Observable, tap } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RevisionService } from '@shared/services/revision.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {
  q$!: Observable<Question>;

  form!: FormGroup;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor(private fb: FormBuilder, private revisionService: RevisionService) {
    this.form = this.fb.group({
      title: [null, Validators.required],
      text: [null, Validators.required],
      summary: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.q$ = this.revisionService.getQuestion(111).pipe(
      tap((value) => {
        this.form.get('title')?.patchValue(value.title);
        this.form.get('text')?.patchValue(value.content);
      })
    );
  }
}
