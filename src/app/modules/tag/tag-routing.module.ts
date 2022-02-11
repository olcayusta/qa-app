import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagComponent } from './tag.component';
import { TagResolver } from './resolvers/tag.resolver';
import { TagTitleResolver } from '@modules/tag/resolvers/tag-title.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { tag: TagResolver },
    children: [
      {
        path: '',
        component: TagComponent,
        title: TagTitleResolver,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagRoutingModule {}
