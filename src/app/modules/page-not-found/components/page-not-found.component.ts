import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(`Sayfa bulunamadı - ${environment.appTitle}`);
  }
}
