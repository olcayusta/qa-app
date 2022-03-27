import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'inek-hotkey-dialog',
  templateUrl: './hotkey-dialog.component.html',
  styleUrls: ['./hotkey-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotkeyDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [HotkeyDialogComponent],
  imports: [MatDialogModule, MatButtonModule]
})
class HotkeyDialogModule {}
