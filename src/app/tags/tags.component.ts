import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TagsService } from './services/tags.service';
import { filter, switchMap } from 'rxjs/operators';
import { TagListComponent } from './tag-list/tag-list.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [TagListComponent, ReactiveFormsModule, MatInputModule],
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagsComponent implements OnInit {
  tags!: Tag[];

  searchControl = new FormControl<string>('');

  private activatedRoute = inject(ActivatedRoute);
  private tagsService = inject(TagsService);

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        filter((value) => value?.length! > 0),
        switchMap((searchTerm) => this.tagsService.getAllTagsBySearchTerm(searchTerm!))
      )
      .subscribe((tags) => {
        console.log(tags);
      });
  }
}
