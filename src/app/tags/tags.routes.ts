import { Routes } from '@angular/router';
import { TagsComponent } from './tags.component';
import { TagsResolver } from './tags.resolver';

export const TAGS_ROUTES: Routes = [
  {
    path: '',
    component: TagsComponent,
    resolve: {
      tags: TagsResolver
    },
    title: 'Etiketler'
  }
];
