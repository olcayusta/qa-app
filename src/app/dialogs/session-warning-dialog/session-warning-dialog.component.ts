import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-session-warning-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './session-warning-dialog.component.html',
  styleUrls: ['./session-warning-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SessionWarningDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
