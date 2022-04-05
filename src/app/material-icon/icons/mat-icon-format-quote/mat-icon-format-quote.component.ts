import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mat-icon-format-quote',
  templateUrl: 'format_quote_black_24dp.svg',
  styleUrls: ['../../material.icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatIconFormatQuoteComponent {
  constructor(private cd: ChangeDetectorRef) {
    this.cd.detach();
  }
}
