import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TagsService } from './services/tags.service';
import { filter, switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { TagListComponent } from './tag-list/tag-list.component';
import { MaterialModule } from '@modules/material/material.module';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, TagListComponent, MaterialModule, ReactiveFormsModule]
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
  }
}
