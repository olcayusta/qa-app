import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  ɵmarkDirty as markDirty
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../question/services/question.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ChipsAutocompleteComponent } from './components/chips-autocomplete/chips-autocomplete.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'inek-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateQuestionComponent implements OnInit {
  form: FormGroup;

  // description!: string;

  worker!: Worker;

  @ViewChild(ChipsAutocompleteComponent)
  chipComponent!: ChipsAutocompleteComponent;

  @ViewChild('markedTextarea', { read: ElementRef, static: true })
  markedTextarea!: ElementRef<HTMLTextAreaElement>;

  constructor(
    private formBuilder: FormBuilder,
    private domSanitizer: DomSanitizer,
    private questionService: QuestionService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.form = formBuilder.group({
      title: [null, [Validators.required]],
      description: ['hello world\n' + '\n' + 'bye bye log', [Validators.required]]
    });
  }

  submit(): void {
    const { title, description } = <{ title: string; description: string }>this.form.value;
    const tags = this.chipComponent.tags;
    this.questionService.saveQuestion(title, description, tags).subscribe((value) => {
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
