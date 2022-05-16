import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-flag-dialog',
  templateUrl: './flag-dialog.component.html',
  styleUrls: ['./flag-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, SharedModule, MatDialogModule]
})
export class FlagDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
