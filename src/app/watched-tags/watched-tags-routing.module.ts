import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchedTagsComponent } from './watched-tags.component';

const routes: Routes = [{ path: '', component: WatchedTagsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchedTagsRoutingModule {}
