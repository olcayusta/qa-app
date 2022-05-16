import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-watched-tag-list-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './watched-tag-list-dialog.component.html',
  styleUrls: ['./watched-tag-list-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchedTagListDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
