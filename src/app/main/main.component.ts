import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  mode!: MatDrawerMode;
  isSmallScreen!: boolean;

  constructor(
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /**
   * Mobil tasarimda, scroll kaydirilinca, asagi veya yukari durumuna gore,
   * fab width degeri degistir.
   */
  fabButtonMakeWidthOnScroll(): void {
    let prevScrollPosition = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPosition > currentScrollPos) {
        // document.getElementById('navbar').style.top = '0';
        console.log('yukari kaydir');
        document.getElementById('extended-fab')!.classList.remove('mini-fab');
      } else {
        // document.getElementById('navbar').style.top = '-50px';
        console.log('asagi kaydir');
        document.getElementById('extended-fab')!.classList.add('mini-fab');
      }
      prevScrollPosition = currentScrollPos;
    };
  }

  ngOnInit(): void {
    this.isSmallScreen =
      this.breakpointObserver.isMatched('(max-width: 599px)');
    this.isSmallScreen ? (this.mode = 'over') : 'side';

    this.mode = 'side';
  }

  sidenavOpened(): void {
    this.document.body.style.overflow = 'hidden';
  }

  sidenavClosed(): void {
    this.document.body.style.overflow = '';
  }

  sheetOpened(): void {
    if (this.isSmallScreen) {
      this.document.body.style.overflow = 'hidden';
    }
  }

  sheetClosed(): void {
    this.document.body.style.overflow = '';
  }
}
