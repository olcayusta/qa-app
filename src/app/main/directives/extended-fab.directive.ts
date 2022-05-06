import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, pairwise, startWith } from 'rxjs/operators';

@Directive({
  selector: '[inekExtendedFab]',
  standalone: true
})
export class ExtendedFabDirective implements AfterViewInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.hideFabOnScrollDown();
  }

  /**
   * If mobile, the extended fab will be hidden by scroll position.
   */
  hideFabOnScrollDown() {
    fromEvent(window, 'scroll')
      .pipe(
        map(() => window.scrollY),
        pairwise(),
        map(([prev, next]) => next > prev),
        distinctUntilChanged(),
        startWith(false)
      )
      .subscribe((value) => {
        const { nativeElement } = this.elementRef;
        if (value) {
          this.renderer.addClass(nativeElement, 'mini-fab');
        } else {
          this.renderer.removeClass(nativeElement, 'mini-fab');
        }
      });
  }
}
