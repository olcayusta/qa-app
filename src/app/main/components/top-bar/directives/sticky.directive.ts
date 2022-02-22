import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, pairwise, startWith } from 'rxjs/operators';

@Directive({
  selector: '[inekSticky]'
})
export class StickyDirective implements AfterViewInit {
  THRESHOLD = 56;

  constructor(
    private renderer: Renderer2,
    private elRef: ElementRef<HTMLElement>,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngAfterViewInit() {
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');

    if (isSmallScreen) {
      fromEvent(window, 'scroll')
        .pipe(
          map(() => window.scrollY),
          pairwise(),
          map(([prev, next]) => next < this.THRESHOLD || prev > next),
          distinctUntilChanged(),
          startWith(true)
        )
        .subscribe((stuck) => {
          this.renderer.setAttribute(this.elRef.nativeElement, 'data-stuck', String(stuck));
        });
    }
  }
}
