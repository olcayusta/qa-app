import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[qaShadowDeneme]'
})
export class ShadowDenemeDirective {

  @Output('load') load: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) { }

  @HostListener('load')
  onLoad() {
    this.el.nativeElement.style.boxShadow = '0 0 10px #000';
  }

}
