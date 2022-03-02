import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'inek-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {}
