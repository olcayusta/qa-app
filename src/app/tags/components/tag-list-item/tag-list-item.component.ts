import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Tag } from '@shared/models/tag.model';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@modules/material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tag-list-item',
  templateUrl: './tag-list-item.component.html',
  styleUrls: ['./tag-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, SharedModule, MaterialModule, MatIconModule]
})
export class TagListItemComponent implements OnInit {
  @Input() tag!: Tag;

  constructor() {}

  ngOnInit(): void {}
}
