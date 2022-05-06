import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class SearchComponent implements OnInit {
  searchQuery!: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.searchQuery = this.route.snapshot.queryParamMap.get('q');
    console.log(this.searchQuery);
  }
}
