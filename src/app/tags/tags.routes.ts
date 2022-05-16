import { Routes } from '@angular/router';
import { TagsComponent } from './tags.component';
import { TagsResolver } from './tags.resolver';

export const tagsRoutes: Routes = [
  {
    path: '',
    component: TagsComponent,
    resolve: {
      tags: TagsResolver
    },
    title: 'Etiketler'
  }
];
