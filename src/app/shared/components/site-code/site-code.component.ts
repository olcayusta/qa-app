import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-site-code',
  standalone: true,
  imports: [CommonModule, SharedModule, MatButtonModule, MatTooltipModule],
  templateUrl: './site-code.component.html',
  styleUrls: ['./site-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteCodeComponent {
  text!: HTMLPreElement;
  language: string = '';

  constructor(private snackBar: MatSnackBar) {}

  async copyCodeToClipboard() {
    await navigator.clipboard.writeText(this.text.textContent!);
    this.snackBar.open('Kod panoya kopyalandı');
  }
}
