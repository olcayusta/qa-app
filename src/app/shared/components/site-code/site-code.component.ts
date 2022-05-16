import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-site-code',
  templateUrl: './site-code.component.html',
  styleUrls: ['./site-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatTooltipModule]
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
