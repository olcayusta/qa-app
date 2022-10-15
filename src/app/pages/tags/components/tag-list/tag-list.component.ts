import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '@models/tag.model';
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

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const { tags } = this.activatedRoute.snapshot.data as { tags: Tag[] };
    this.tags = tags;
  }
}