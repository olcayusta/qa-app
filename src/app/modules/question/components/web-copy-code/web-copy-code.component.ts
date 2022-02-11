import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-web-copy-code',
  templateUrl: './web-copy-code.component.html',
  styleUrls: ['./web-copy-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WebCopyCodeComponent {
  text!: HTMLPreElement;
  lang!: string;

  constructor(private snackBar: MatSnackBar) {}

  async copyCode(): Promise<void> {
    await this.copyPreCode();
  }

  async copyPreCode() {
    await navigator.clipboard.writeText(this.text.textContent!);
    this.snackBar.open('Kod panoya kopyalandı');
  }
}
