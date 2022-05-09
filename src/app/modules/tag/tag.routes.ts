import { Routes } from '@angular/router';

import { TagComponent } from './tag.component';
import { TagResolver } from './resolvers/tag.resolver';
import { TagTitleResolver } from '@modules/tag/resolvers/tag-title.resolver';

export const routes: Routes = [
  {
    path: '',
    resolve: { tag: TagResolver },
    children: [
      {
        path: '',
        component: TagComponent,
        title: TagTitleResolver
      }
    ]
  }
];
