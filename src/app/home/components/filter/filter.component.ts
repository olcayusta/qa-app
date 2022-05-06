import { ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FilterByComponent } from './components/filter-by/filter-by.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'id-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatIconModule, MatListModule, FilterByComponent, SortByComponent]
})
export class FilterComponent implements OnInit {
  filterOpened = false;

  @ViewChild('bottomExample') template!: TemplateRef<any>;

  constructor(private bottomSheet: MatBottomSheet) {}

  ngOnInit() {}

  /**
   * Mobile => Open Bottom Sheet Component
   */
  openBottomSheet(): void {
    console.log(this.template);
    this.bottomSheet.open(this.template);
  }
}
