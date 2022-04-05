import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mat-icon-format-bold',
  templateUrl: 'format_bold_black_24dp.svg',
  styleUrls: ['../../material.icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatIconFormatBoldComponent {
  constructor(private cd: ChangeDetectorRef) {
    this.cd.detach();
  }
}
