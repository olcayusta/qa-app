import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-share-dialog',
  templateUrl: './share-dialog.component.html',
  styleUrls: ['./share-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatInputModule, MatDialogModule]
})
export class ShareDialogComponent implements OnInit {
  url!: string;

  constructor() {}

  ngOnInit(): void {
    this.url = window.location.href;
  }
}
