import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'qa-popup-container',
  templateUrl: './popup-container.component.html',
  styleUrls: ['./popup-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupContainerComponent implements OnInit {
  @Input('popupContainerTitle') title: string | undefined;
  @Input('outlet') outlet: any;

  constructor() {}

  ngOnInit(): void {}
}
