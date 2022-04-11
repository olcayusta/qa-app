import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { MatMenu, MatMenuItem } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';

interface Food {
  value: string;
  viewValue: string;
  disabled?: boolean;
}

@Component({
  selector: 'inek-sort-filter',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortByComponent implements OnInit, AfterViewInit {
  @ViewChild('menu') menu!: MatMenu;
  @ViewChildren('menuItem') menuItemList!: QueryList<MatMenuItem>;

  @ViewChild('sortMenu') sortMenu!: MatMenu;

  menuItems!: MatMenuItem[];

  @Output() openFilter = new EventEmitter();

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  items = [
    { sort: '', label: 'Eklenme tarihi (en yeni)' },
    { sort: 'activity', label: 'Güncelleme tarihi (en yeni)' },
    { sort: 'popularity', label: 'Highest score (en yüksek)' },
    { sort: 'date', label: 'Most frequent ', disabled: true },
    { sort: 'activity', label: 'Bounty ending soon', disabled: true }
  ];

  selectedIndex = 0;

  filters = [
    {
      viewValue: 'No answers',
      checked: false
    },
    {
      viewValue: 'No accepted answers',
      checked: false
    },
    {
      viewValue: 'Has bounty',
      checked: false
    }
  ];

  selectedFilterIndex!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const sort = this.route.snapshot.queryParamMap.get('sort');
    if (sort) {
      this.selectedIndex = this.items.findIndex((value) => value.sort === sort);
    }
  }

  ngAfterViewInit(): void {}

  /**
   *
   * @param menuItem
   * @param index
   */
  menuItemClicked(menuItem: MatMenuItem, index: number) {
    this.selectedIndex = index;
  }

  filterMenuItemClicked(index: number) {
    this.filters[index].checked = true;
    this.selectedFilterIndex = index;
  }
}
