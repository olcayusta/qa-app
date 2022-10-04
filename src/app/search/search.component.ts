import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  searchQuery!: any;
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.searchQuery = this.route.snapshot.queryParamMap.get('q');
    console.log(this.searchQuery);
  }
}
