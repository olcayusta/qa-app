import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'inek-img-shadow',
  templateUrl: './img-shadow.component.html',
  styleUrls: ['./img-shadow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgShadowComponent {
  @Input() src!: string;
  @Input() alt!: string;

  @Input() width: number = 40;
  @Input() height: number = 40;

  constructor(private elementRef: ElementRef<HTMLImageElement>) {}

  onLoad() {
    this.elementRef.nativeElement.setAttribute('loaded', '');
  }
}
