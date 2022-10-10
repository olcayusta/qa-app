import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-gf-icon',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: `./gf-icon.component.html`,
  styleUrls: ['./gf-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GfIconComponent {
  @Input() name!: string;
}
