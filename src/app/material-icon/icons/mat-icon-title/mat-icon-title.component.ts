import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mat-icon-title',
  templateUrl: 'title_black_24dp.svg',
  styleUrls: ['../../material.icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatIconTitleComponent {
  constructor(private cd: ChangeDetectorRef) {
    this.cd.detach();
  }
}
