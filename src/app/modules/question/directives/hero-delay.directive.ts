import { Directive, ElementRef, Input, ViewContainerRef } from '@angular/core';
import { SiteCodeComponent } from '@shared/components/site-code/site-code.component';

@Directive({
  selector: '[qaHeroDelay]',
})
export class HeroDelayDirective {
  div: HTMLDivElement = document.createElement('div');

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input()
  // @ts-ignore
  set qaHeroDelay(value: string): void {
    this.div.innerHTML = value;

    Array.from(this.div.children).forEach((el) => {
      if (el.nodeName === 'PRE') {

        this.viewContainerRef.clear();
        const comp = this.viewContainerRef.createComponent(SiteCodeComponent);

        comp.instance.text = el as HTMLPreElement;

        if (el.querySelector('code')?.className) {
          // @ts-ignore
          comp.instance.lang = el.querySelector('code')?.className?.split('-')[1].toLocaleUpperCase();
        }

        // @ts-ignore
        el.replaceWith(comp.hostView.rootNodes[0]);
      }
    });
    // this.elementRef.nativeElement.replaceWith(this.div);
    // @ts-ignore

    this.elementRef.nativeElement.appendChild(this.div);

    // @ts-ignore
    // this.elementRef.nativeElement.parentNode.appendChild(this.div);
  }
}
