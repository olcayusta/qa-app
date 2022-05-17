import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-mode-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'dark_mode.svg',
  styleUrls: ['./dark-mode-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DarkModeIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
