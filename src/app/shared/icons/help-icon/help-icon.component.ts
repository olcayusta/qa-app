import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'help.svg',
  styleUrls: ['./help-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelpIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
