import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mat-icon-search',
  templateUrl: 'search_black_24dp.svg',
  styleUrls: ['../../material.icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchIconComponent {
  constructor(private cd: ChangeDetectorRef) {
    this.cd.detach();
  }
}
