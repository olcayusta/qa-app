import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TagsService } from './services/tags.service';
import { filter, switchMap } from 'rxjs/operators';
import { TagListItemComponent } from './components/tag-list-item/tag-list-item.component';
import { TagListComponent } from './components/tag-list/tag-list.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    TagListComponent,
    TagListItemComponent,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ]
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
