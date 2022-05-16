import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'inek-img-shadow',
  standalone: true,
  templateUrl: './img-shadow.component.html',
  styleUrls: ['./img-shadow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgShadowComponent {
  @Input() src!: string;
  @Input() alt!: string;
  @Input() itemprop = false;

  @HostBinding('style.width.px') @Input() width: number = 40;
  @HostBinding('style.height.px') @Input() height: number = 40;

  constructor(private elementRef: ElementRef<HTMLImageElement>) {}

  /**
   * Host component set attribute loaded if image is loaded
   */
  onLoad(): void {
    this.elementRef.nativeElement.setAttribute('loaded', '');
  }
}
