import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'inek-session-warning-dialog',
  templateUrl: './session-warning-dialog.component.html',
  styleUrls: ['./session-warning-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionWarningDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [SessionWarningDialogComponent],
  imports: [MatDialogModule, MatButtonModule]
})
class SessionWarningDialogModule {}
