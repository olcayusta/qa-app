import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'mat-icon-menu',
  templateUrl: 'menu_black_24dp.svg',
  styleUrls: ['../../material.icon.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatIconMenuComponent {
  constructor(private cd: ChangeDetectorRef) {
    this.cd.detach();
  }
}
