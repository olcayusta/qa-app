import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { TagsService } from './services/tags.service';
import { filter, switchMap } from 'rxjs/operators';

@Component({
  selector: 'id-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent implements OnInit {
  tags!: Tag[];

  searchControl = new FormControl<string>('');

  constructor(private route: ActivatedRoute, private tagsService: TagsService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        filter((value) => value?.length! > 0),
        switchMap((searchTerm) => this.tagsService.getAllTagsBySearchTerm(searchTerm!))
      )
      .subscribe((tags) => {
        console.log(tags);
      });
    const { tags } = this.route.snapshot.data as { tags: Tag[] };
    this.tags = tags;
  }
}
