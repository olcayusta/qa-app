import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'inek-editor-buttons',
  templateUrl: './editor-buttons.component.html',
  styleUrls: ['./editor-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class EditorButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
