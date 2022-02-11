import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'qa-q-list-item-img-shadow',
  templateUrl: './q-list-item-img-shadow.component.html',
  styleUrls: ['./q-list-item-img-shadow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QListItemImgShadowComponent implements OnInit {
  @Input('url') url!: string;

  constructor(private elRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {}

  onImgLoad() {
    this.elRef.nativeElement.setAttribute('loaded', '');
  }
}
