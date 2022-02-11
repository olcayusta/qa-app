import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'qa-site-code',
  templateUrl: './site-code.component.html',
  styleUrls: ['./site-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteCodeComponent {
  text!: HTMLPreElement;
  lang: string = '';

  constructor(private snackBar: MatSnackBar) {}

  async copyCode() {
    await navigator.clipboard.writeText(this.text.textContent!);
    this.snackBar.open('Kod panoya kopyalandı');
  }
}
