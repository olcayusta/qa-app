import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-question-content',
  templateUrl: './question-content.component.html',
  styleUrls: ['./question-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class QuestionContentComponent {
  @Input() content!: string;
  @ViewChild('divElement2', { read: ElementRef })
  divElement2!: ElementRef<HTMLDivElement>;

  constructor() {
  }

}
