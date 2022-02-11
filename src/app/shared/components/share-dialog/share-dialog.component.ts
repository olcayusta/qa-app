import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareDialogComponent implements OnInit {
  url!: string;

  constructor() {}

  ngOnInit(): void {
    this.url = window.location.href;
  }
}
