import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotkey-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './hotkey-dialog.component.html',
  styleUrls: ['./hotkey-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotkeyDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
