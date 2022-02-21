import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Renderer2
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { MatAnchor } from '@angular/material/button';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, pairwise, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit, AfterViewInit {
  mode!: MatDrawerMode;
  isSmallScreen!: boolean;

  @ViewChild('extendedFab', { static: true, read: ElementRef }) extendedFab!: ElementRef<MatAnchor>;

  constructor(
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /**
   * Mobil tasarimda, scroll kaydirilinca, asagi veya yukari durumuna gore,
   * fab width degeri degistir.
   */
  fabButtonMakeWidthOnScroll(): void {
    /**
     * Scroll kaydirilinca, asagi veya yukari durumuna gore, fab width degeri degistir.
     */
    fromEvent(window, 'scroll')
      .pipe(
        map(() => window.scrollY),
        pairwise(),
        map(([prev, next]) => next > prev),
        distinctUntilChanged(),
        startWith(false)
      )
      .subscribe((value) => {
        if (value) {
          this.renderer.addClass(this.extendedFab.nativeElement, 'mini-fab');
        } else {
          this.renderer.removeClass(this.extendedFab.nativeElement, 'mini-fab');
        }
      });

    /**
     * Mobil tasarimda, scroll kaydirilinca, asagi veya yukari durumuna gore,
     */
    /*    let prevScrollPosition = window.scrollY;
    window.onscroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPosition) {
        this.renderer.addClass(this.extendedFab.nativeElement, 'mini-fab');
      } else {
        this.renderer.removeClass(this.extendedFab.nativeElement, 'mini-fab');
      }
      prevScrollPosition = currentScrollPos;
    };*/
  }

  ngAfterViewInit() {
    // this.fabButtonMakeWidthOnScroll();
  }

  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    this.isSmallScreen ? (this.mode = 'over') : 'side';

    this.mode = 'side';
  }

  sidenavOpenedStart(): void {
    this.document.body.style.overflow = 'hidden';
  }

  sidenavClosedStart(): void {
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
