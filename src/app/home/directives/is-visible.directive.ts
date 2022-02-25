import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output
} from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements AfterViewInit, OnDestroy {
  @Output() scrolled = new EventEmitter();

  observer!: IntersectionObserver;

  constructor(private elementRef: ElementRef<HTMLDivElement>) {}

  /**
   * Create an intersection observer and emit an event when the element is visible
   */
  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    });
    this.observer.observe(this.elementRef.nativeElement);
  }

  /**
   * Destroy the intersection observer if component is destroyed
   */
  ngOnDestroy() {
    this.observer.unobserve(this.elementRef.nativeElement);
  }
}
