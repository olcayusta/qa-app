import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-side-sheet',
  standalone: true,
  imports: [CommonModule, SharedModule, MatToolbarModule, MatCheckboxModule, MatRadioModule],
  templateUrl: './side-sheet.component.html',
  styleUrls: ['./side-sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideSheetComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
