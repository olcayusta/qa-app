import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-gf-icon',
  templateUrl: `./gf-icon.component.html`,
  styleUrls: ['./gf-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GfIconComponent {
  @Input() name!: string;
}
