import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-flag-dialog',
  standalone: true,
  imports: [SharedModule, MatDialogModule, MatButtonModule],
  templateUrl: './flag-dialog.component.html',
  styleUrls: ['./flag-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlagDialogComponent {

}
