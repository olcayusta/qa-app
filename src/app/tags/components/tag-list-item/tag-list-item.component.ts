import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Tag } from '@models/tag.model';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-tag-list-item',
  standalone: true,
  imports: [MatIconModule, NgClass, NgIf],
  templateUrl: './tag-list-item.component.html',
  styleUrls: ['./tag-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagListItemComponent {
  @Input() tag!: Tag;
}
