import { Directive, ElementRef, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[qaLazyImg]',
})
export class LazyImgDirective implements OnInit {
  @HostBinding('attr.src') src = null;
  imgSrc!: string;

  @Output('lazyLoad') lazyLoad = new EventEmitter<any>();

  constructor(private elementRef: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    const { nativeElement } = this.elementRef;
    this.imgSrc = nativeElement.src;

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const { isIntersecting, target } = entry;
      const img = <HTMLImageElement>target;
      if (isIntersecting) {
        img.src = this.imgSrc;
        intersectionObserver.disconnect();
      }
    });
    intersectionObserver.observe(nativeElement);
  }
}
