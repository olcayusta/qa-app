import { AfterViewInit, Directive, ElementRef, inject, Renderer2 } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, pairwise, startWith } from 'rxjs/operators';

@Directive({
  selector: '[appExtendedFab]',
  standalone: true
})
export class ExtendedFabDirective implements AfterViewInit {
  private elementRef = inject(ElementRef).nativeElement;
  private renderer = inject(Renderer2);

  ngAfterViewInit() {
    this.hideFabWhenScrollDown();
  }

  /**
   * If mobile, the extended fab will be hidden by scroll position.
   */
  hideFabWhenScrollDown() {
    fromEvent(window, 'scroll')
      .pipe(
        map(() => window.scrollY),
        pairwise(),
        map(([prev, next]) => next > prev),
        distinctUntilChanged(),
        startWith(false)
      )
      .subscribe((value) => {
        if (value)
          this.renderer.addClass(this.elementRef, 'mini-fab');
        else {
          this.renderer.removeClass(this.elementRef, 'mini-fab');
        }
      });
  }
}
