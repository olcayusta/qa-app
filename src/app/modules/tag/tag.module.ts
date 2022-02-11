import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagRoutingModule } from './tag-routing.module';
import { TagComponent } from './tag.component';
import { SharedModule } from '@shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [TagComponent],
  imports: [CommonModule, TagRoutingModule, SharedModule, MatDividerModule],
})
export class TagModule {}
