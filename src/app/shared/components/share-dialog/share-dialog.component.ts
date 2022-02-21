import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { MaterialModule } from '@modules/material/material.module';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareDialogComponent implements OnInit {
  url!: string;

  constructor() {}

  ngOnInit(): void {
    this.url = window.location.href;
  }
}

@NgModule({
  declarations: [ShareDialogComponent],
  imports: [MaterialModule]
})
export class ShareDialogModule {
  /*  public static components = {
      ShareDialogComponent
    }*/
}
