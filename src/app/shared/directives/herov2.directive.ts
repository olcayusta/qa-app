import {
  Directive,
  ElementRef,
  EmbeddedViewRef,
  inject,
  Input, OnChanges, SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import { SiteCodeComponent } from '@components/site-code/site-code.component';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appHerov2]',
  standalone: true
})
export class Herov2Directive implements OnChanges {
  @Input() text!: string;

  private viewContainerRef = inject(ViewContainerRef);
  private elementRef: HTMLElement = inject(ElementRef).nativeElement;
  private document = inject(DOCUMENT);

  divElement: HTMLDivElement = this.document.createElement('div');

  ngOnChanges(changes: SimpleChanges) {
    this.divElement.innerHTML = this.text;

    Array.from(this.divElement.children).forEach((el) => {
      if (el.nodeName === 'PRE') {
        // FIXME (Fragment ile cevaba scroll edilince, PRE etiketi margin-padding algilanmiyor.)
        // this.viewContainerRef.clear();
        const { instance, hostView } = this.viewContainerRef.createComponent(SiteCodeComponent);
        instance.text = el as HTMLPreElement;
        const { rootNodes } = hostView as EmbeddedViewRef<SiteCodeComponent>;
        el.replaceWith(rootNodes[0]);
      }
    });

    this.elementRef.appendChild(this.divElement);
  }
}
