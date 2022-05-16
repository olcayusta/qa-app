import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotkey-dialog',
  templateUrl: './hotkey-dialog.component.html',
  styleUrls: ['./hotkey-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule]
})
export class HotkeyDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
