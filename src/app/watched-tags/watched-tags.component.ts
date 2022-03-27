import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { Observable } from 'rxjs';
import { WatchedTagService } from './services/watched-tag.service';

@Component({
  selector: 'inek-watched-tags',
  templateUrl: './watched-tags.component.html',
  styleUrls: ['./watched-tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchedTagsComponent implements OnInit {
  tags$!: Observable<Tag[]>;

  constructor(private watchedTagService: WatchedTagService) {}

  ngOnInit(): void {
    this.tags$ = this.watchedTagService.getFavoriteTags();
  }
}
