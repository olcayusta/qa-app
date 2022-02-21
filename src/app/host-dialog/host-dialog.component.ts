import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
  ViewChild,
  TemplateRef,
  AfterViewInit,
  ɵmarkDirty as markDirty,
  ViewContainerRef
} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@modules/material/material.module';
import { OverlayModule, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { MessageArchivedComponent } from '../message-archived/message-archived.component';

@Component({
  selector: 'inek-host-dialog',
  templateUrl: './host-dialog.component.html',
  styleUrls: ['./host-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostDialogComponent implements OnInit, AfterViewInit {
  @ViewChild('dialogRef') dialogRef!: TemplateRef<MatDialog>;

  constructor(
    private vcr: ViewContainerRef,
    private dialog: MatDialog,
    private sso: ScrollStrategyOptions
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dialog.open(this.dialogRef, {
      width: '600px'
    });
  }
}

@NgModule({
  declarations: [HostDialogComponent],
  imports: [MatDialogModule, MaterialModule, CommonModule, OverlayModule]
})
export class HostDialogModule {}
