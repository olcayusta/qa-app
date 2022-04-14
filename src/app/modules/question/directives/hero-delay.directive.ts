import { Directive, ElementRef, EmbeddedViewRef, Input, ViewContainerRef } from '@angular/core';
import { SiteCodeComponent } from '@shared/components/site-code/site-code.component';

@Directive({
  selector: '[qaHeroDelay]'
})
export class HeroDelayDirective {
  div: HTMLDivElement = document.createElement('div');

  constructor(private elementRef: ElementRef<HTMLElement>, private viewContainerRef: ViewContainerRef) {}

  @Input()
  // @ts-ignore
  set qaHeroDelay(value: string): void {
    this.div.innerHTML = value;

    Array.from(this.div.children).forEach((el) => {
      if (el.nodeName === 'PRE') {
        // FIXME (Fragment ile cevaba scroll edilince, PRE etiketi margin-padding algilanmiyor.)
        // this.viewContainerRef.clear();
        const comp = this.viewContainerRef.createComponent(SiteCodeComponent);

        comp.instance.text = el as HTMLPreElement;

        const codeElement = el.querySelector('code');

        if (codeElement?.className) {
          // @ts-ignore
          comp.instance.language = codeElement?.className?.split('-')[1].toLocaleUpperCase();
          /*     const codeElement = value.querySelector('code') as HTMLElement;
               const lang = codeElement?.className.split('language-')[1];
               const language = hljs.getLanguage(lang);*/
        }

        const { rootNodes } = comp.hostView as EmbeddedViewRef<SiteCodeComponent>;
        el.replaceWith(rootNodes[0]);
      }
    });
    // this.elementRef.nativeElement.replaceWith(this.div);
    // @ts-ignore

    this.elementRef.nativeElement.appendChild(this.div);

    // @ts-ignore
    // this.elementRef.nativeElement.parentNode.appendChild(this.div);
  }
}
