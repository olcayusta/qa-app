import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'inek-site-code',
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
