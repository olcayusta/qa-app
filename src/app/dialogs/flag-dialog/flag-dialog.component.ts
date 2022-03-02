import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'inek-flag-dialog',
  templateUrl: './flag-dialog.component.html',
  styleUrls: ['./flag-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
