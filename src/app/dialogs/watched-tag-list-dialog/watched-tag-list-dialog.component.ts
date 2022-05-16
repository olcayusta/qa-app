import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watched-tag-list-dialog',
  templateUrl: './watched-tag-list-dialog.component.html',
  styleUrls: ['./watched-tag-list-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatChipsModule, MatIconModule]
})
export class WatchedTagListDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
