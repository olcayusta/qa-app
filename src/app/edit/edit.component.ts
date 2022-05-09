import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { Observable, tap } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RevisionService } from '@shared/services/revision.service';
import { MarkedService } from '@shared/services/marked.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '@shared/shared.module';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, ReactiveFormsModule, SharedModule]
})
export class EditComponent implements OnInit {
  question$!: Observable<Question>;

  form!: FormGroup;

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  constructor(private fb: FormBuilder, private revisionService: RevisionService, private markedService: MarkedService) {
    this.form = this.fb.group({
      revisions: [null],
      title: [null, Validators.required],
      text: [null, Validators.required],
      summary: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.question$ = this.revisionService.getQuestion(125).pipe(
      tap(({ title, content, revisions }: Question) => {
        this.form.get('title')?.patchValue(title);
        this.form.get('text')?.patchValue(content);
        this.form.get('revisions')?.patchValue(revisions);

        const formText = this.form.get('text')?.value;

        this.markedService.markedWorker.postMessage(formText);
        this.markedService.getMessages().subscribe((value) => {
          console.log(value);
        });
      })
    );
  }
}
