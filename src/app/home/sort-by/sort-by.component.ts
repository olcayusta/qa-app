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
import { MatMenu, MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';

interface Food {
  value: string;
  viewValue: string;
  disabled?: boolean;
}

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-sort-by',
  standalone: true,
  imports: [CommonModule, RouterModule, SharedModule, MatMenuModule, MatButtonModule],
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

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({ name: value });
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

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
    this.filters[index].checked = !this.filters[index].checked;
    this.selectedFilterIndex = index;
  }
}