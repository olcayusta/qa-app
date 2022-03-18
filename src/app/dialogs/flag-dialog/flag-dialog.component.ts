import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'inek-flag-dialog',
  templateUrl: './flag-dialog.component.html',
  styleUrls: ['./flag-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagDialogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [FlagDialogComponent],
  imports: [CommonModule, MaterialModule, SharedModule, MatDialogModule]
})
export class FlagDialogModule {}
