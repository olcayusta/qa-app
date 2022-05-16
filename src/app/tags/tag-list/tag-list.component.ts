import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Tag } from '@shared/models/tag.model';
import { TagListItemComponent } from '../tag-list-item/tag-list-item.component';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [CommonModule, TagListItemComponent],
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagListComponent implements OnInit {
  tags!: Tag[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { tags } = this.route.snapshot.data as { tags: Tag[] };
    this.tags = tags;
  }
}
