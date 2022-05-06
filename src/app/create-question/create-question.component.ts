import { ChangeDetectionStrategy, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ChipsAutocompleteComponent } from './components/chips-autocomplete/chips-autocomplete.component';
import { CommonModule, DOCUMENT } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@shared/shared.module';
import { MaterialIconModule } from '../material-icon/material-icon.module';
import { QuestionService } from '@modules/question/services/question.service';

@Component({
  selector: 'inek-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MaterialModule,
    SharedModule,
    MaterialIconModule,
    ChipsAutocompleteComponent
  ]
})
export class CreateQuestionComponent implements OnInit {
  questionForm: FormGroup<{
    title: FormControl<string | null>;
    description: FormControl<string | null>;
  }>;

  // description!: string;

  worker!: Worker;

  @ViewChild(ChipsAutocompleteComponent)
  chipComponent!: ChipsAutocompleteComponent;

  @ViewChild('markedTextarea', { read: ElementRef, static: true })
  markedTextarea!: ElementRef<HTMLTextAreaElement>;

  constructor(
    private fb: FormBuilder,
    private domSanitizer: DomSanitizer,
    private questionService: QuestionService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.questionForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['hello world\n' + '\n' + 'bye bye log', [Validators.required]]
    });
  }

  submit(): void {
    const { title, description } = this.questionForm.controls;
    const tags = this.chipComponent.tags;
    this.questionService.saveQuestion(title.value!, description.value!, tags).subscribe((value) => {
      console.log(value);
    });
  }

  changeMetaThemeColor(): void {
    // @ts-ignore
    document.querySelectorAll('meta[name=theme-color]').forEach((value) => {
      value.setAttribute('content', 'yellow');
    });
  }

  ngOnInit(): void {
    /*    this.form.get('description')!.valueChanges.subscribe((value) => {
      this.worker.postMessage(value);

      // FIXME
      this.description = value;
    });*/
    /*    this.markedTextarea.nativeElement.onselectionchange = (ev) => {
      console.log('degisti');
    };*/
  }

  onBlur(): void {
    // this.worker.terminate();
  }

  onFocus(): void {
    /*    this.worker = new Worker('../marked.worker', {
      type: 'module',
      name: 'marked'
    });
    this.worker.onmessage = ({ data }) => {
      this.description = this.domSanitizer.bypassSecurityTrustHtml(data) as string;
      markDirty(this);
    };*/
  }

  onSelectChange($event: Event) {
    const textarea = this.markedTextarea.nativeElement;
    const range = window.getSelection();
    /*    console.log('changed', document.getSelection()?.getRangeAt(0));*/
  }
}
