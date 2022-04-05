import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'mat-icon-strikethrough-s',
  templateUrl: 'strikethrough_s_black_24dp.svg',
  styleUrls: ['../../material.icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatIconStrikethroughSComponent {
  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }
}
