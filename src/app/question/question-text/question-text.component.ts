import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { HighlightElementDirective } from '@shared/directives/highlight-element.directive';
import { HeroDelayDirective } from '../directives/hero-delay.directive';

@Component({
  selector: 'inek-question-text',
  standalone: true,
  imports: [HeroDelayDirective, HighlightElementDirective],
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionTextComponent {
  @Input() content!: string;
}
