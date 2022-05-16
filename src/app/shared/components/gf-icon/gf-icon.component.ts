import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gf-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./gf-icon.component.html`,
  styleUrls: ['./gf-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GfIconComponent {
  @Input() name!: string;
}
