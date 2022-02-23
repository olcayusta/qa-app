import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchedTagsRoutingModule } from './watched-tags-routing.module';
import { WatchedTagsComponent } from './watched-tags.component';

@NgModule({
  declarations: [WatchedTagsComponent],
  imports: [CommonModule, WatchedTagsRoutingModule]
})
export class WatchedTagsModule {}
