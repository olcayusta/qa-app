import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDelayDirective } from '@modules/question/directives/hero-delay.directive';
import { HighlightElementDirective } from '@shared/directives/highlight-element.directive';

@Component({
  selector: 'inek-question-text',
  templateUrl: './question-text.component.html',
  styleUrls: ['./question-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, HeroDelayDirective, HighlightElementDirective]
})
export class QuestionTextComponent {
  @Input() content!: string;
}
