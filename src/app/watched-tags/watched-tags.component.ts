import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TagService } from '@modules/tag/services/tag.service';
import { Tag } from '@shared/models/tag.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'inek-watched-tags',
  templateUrl: './watched-tags.component.html',
  styleUrls: ['./watched-tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchedTagsComponent implements OnInit {
  tags$!: Observable<Tag[]>;

  constructor(private tagService: TagService) {}

  ngOnInit(): void {
    this.tags$ = this.tagService.getFavoriteTags();
  }
}
