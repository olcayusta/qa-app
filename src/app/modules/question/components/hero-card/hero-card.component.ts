import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('card component loaded!');
  }

}
