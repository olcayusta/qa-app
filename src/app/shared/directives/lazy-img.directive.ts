import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[inekLazyImg]'
})
export class LazyImgDirective implements OnInit {
  @HostBinding('attr.src') src = null;
  imgSrc!: string;

  constructor(private elementRef: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    const { nativeElement } = this.elementRef;
    this.imgSrc = nativeElement.src;

    const intersectionObserver = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        nativeElement.src = this.imgSrc;
        intersectionObserver.unobserve(nativeElement);
      }
    });
    intersectionObserver.observe(nativeElement);
  }
}
