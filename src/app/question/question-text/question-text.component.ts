import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightElementDirective } from '@shared/directives/highlight-element.directive';
import { HeroDelayDirective } from '../directives/hero-delay.directive';

@Component({
  selector: 'inek-question-text',
  standalone: true,
  imports: [CommonModule, HeroDelayDirective, HighlightElementDirective],
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionTextComponent {
  @Input() content!: string;

  constructor() {
  }
}
