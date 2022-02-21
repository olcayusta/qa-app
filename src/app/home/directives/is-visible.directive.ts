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

  /**
   * @param elementRef
   */
  constructor(private elementRef: ElementRef<HTMLDivElement>) {}

  /**
   * Initialize the intersection observer
   */
  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    });
    this.observer.observe(this.elementRef.nativeElement);
  }

  /**
   * Destroy the intersection observer
   */
  ngOnDestroy() {
    this.observer.unobserve(this.elementRef.nativeElement);
  }
}
