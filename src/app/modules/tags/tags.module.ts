import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import { MatCardModule } from '@angular/material/card';
import { TagListItemComponent } from './components/tag-list-item/tag-list-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TagListComponent } from './components/tag-list/tag-list.component';

@NgModule({
  declarations: [TagsComponent, TagListItemComponent, TagListComponent],
  imports: [CommonModule, TagsRoutingModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class TagsModule {}
