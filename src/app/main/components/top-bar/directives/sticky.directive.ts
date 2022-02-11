import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, pairwise, startWith } from 'rxjs/operators';

const THRESHOLD = 56;

@Directive({
  selector: '[idSticky]',
})
export class StickyDirective {
  constructor(
    private renderer: Renderer2,
    { nativeElement }: ElementRef<HTMLElement>,
    private breakpointObserver: BreakpointObserver
  ) {
    const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');

    if (isSmallScreen) {
      fromEvent(window, 'scroll')
        .pipe(
          map(() => window.scrollY),
          pairwise(),
          map(([prev, next]) => next < THRESHOLD || prev > next),
          distinctUntilChanged(),
          startWith(true)
        )
        .subscribe((stuck) => {
          // @ts-ignore
          renderer.setAttribute(nativeElement, 'data-stuck', stuck);
        });
    }
  }
}
