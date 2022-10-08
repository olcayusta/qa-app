import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '@shared/models/tag.model';
import { TagListItemComponent } from '../tag-list-item/tag-list-item.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [TagListItemComponent, NgForOf],
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagListComponent implements OnInit {
  tags!: Tag[];

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const { tags } = this.activatedRoute.snapshot.data as { tags: Tag[] };
    this.tags = tags;
  }
}
