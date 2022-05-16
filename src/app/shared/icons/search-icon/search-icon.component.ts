import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'search.svg',
  styleUrls: ['./search-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
