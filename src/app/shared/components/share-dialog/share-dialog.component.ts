import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { MaterialModule } from '@modules/material/material.module';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

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
  imports: [MaterialModule, MatInputModule, MatDialogModule]
})
class ShareDialogModule {
  /*  public static components = {
      ShareDialogComponent
    }*/
}
