import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-list-item',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './tag-list-item.component.html',
  styleUrls: ['./tag-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagListItemComponent implements OnInit {
  @Input() tag!: Tag;

  constructor() {}

  ngOnInit(): void {}
}
