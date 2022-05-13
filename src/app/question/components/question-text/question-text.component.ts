import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightElementDirective } from '@shared/directives/highlight-element.directive';
import { HeroDelayDirective } from '../../directives/hero-delay.directive';

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
