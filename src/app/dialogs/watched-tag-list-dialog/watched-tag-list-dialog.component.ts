import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'inek-watched-tag-list-dialog',
  templateUrl: './watched-tag-list-dialog.component.html',
  styleUrls: ['./watched-tag-list-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchedTagListDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [WatchedTagListDialogComponent],
  imports: [MatDialogModule, MatButtonModule, MatChipsModule, MatIconModule]
})
class WatchedTagListDialogModule {}
