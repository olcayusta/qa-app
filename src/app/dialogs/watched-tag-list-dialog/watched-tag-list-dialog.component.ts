import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'inek-watched-tag-list-dialog',
  templateUrl: './watched-tag-list-dialog.component.html',
  styleUrls: ['./watched-tag-list-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchedTagListDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
