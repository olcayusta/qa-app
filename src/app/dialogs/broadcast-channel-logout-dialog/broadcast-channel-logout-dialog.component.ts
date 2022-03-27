import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'inek-broadcast-channel-logout-dialog',
  templateUrl: './broadcast-channel-logout-dialog.component.html',
  styleUrls: ['./broadcast-channel-logout-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BroadcastChannelLogoutDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [BroadcastChannelLogoutDialogComponent],
  imports: [MatDialogModule, MatButtonModule]
})
class BroadcastChannelLogoutDialogModule {}
