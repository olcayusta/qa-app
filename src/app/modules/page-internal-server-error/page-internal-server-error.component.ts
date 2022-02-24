import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'inek-page-internal-server-error',
  templateUrl: './page-internal-server-error.component.html',
  styleUrls: ['./page-internal-server-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageInternalServerErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
