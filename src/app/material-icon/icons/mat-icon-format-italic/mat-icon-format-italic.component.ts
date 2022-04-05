import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mat-icon-format-italic',
  templateUrl: 'format_italic_black_24dp.svg',
  styleUrls: ['../../material.icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatIconFormatItalicComponent {
  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }
}
