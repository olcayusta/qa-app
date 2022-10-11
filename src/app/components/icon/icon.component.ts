import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [
    NgSwitch,
    NgSwitchCase
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
  @Input() name!: string;
}
