import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'inek-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {
  filterOpened = false;

  @ViewChild('bottomExample') template!: TemplateRef<any>;

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit() {}

  openBottomSheet(): void {
    console.log(this.template);
    this.bottomSheet.open(this.template);
  }
}
