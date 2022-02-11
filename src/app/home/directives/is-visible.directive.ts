import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appIsVisible]',
})
export class IsVisibleDirective implements AfterViewInit, OnDestroy {
  @Output() scrolled = new EventEmitter();

  observer!: IntersectionObserver;

  constructor(private elementRef: ElementRef<HTMLDivElement>) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(([entry]) => {
      entry.isIntersecting && this.scrolled.emit();
    });
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
