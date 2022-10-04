import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-site-code',
  standalone: true,
  imports: [SharedModule, MatButtonModule, MatTooltipModule, NgIf],
  templateUrl: './site-code.component.html',
  styleUrls: ['./site-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SiteCodeComponent implements OnInit {
  text!: HTMLPreElement;
  language: string = '';
  @Input() HTMLPreText!: HTMLPreElement;
  @Input() helloWorld!: number;

  constructor(private snackBar: MatSnackBar) {
  }

  async copyCodeToClipboard() {
    await navigator.clipboard.writeText(this.text.textContent!);
    this.snackBar.open('Kod panoya kopyalandı');
  }

  ngOnInit() {
    // console.log(this.HTMLPreText)
  }
}
