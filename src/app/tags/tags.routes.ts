import { Routes } from '@angular/router';
import { TagsComponent } from './tags.component';
import { TagsResolver } from './resolvers/tags.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    component: TagsComponent,
    resolve: {
      tags: TagsResolver
    },
    title: 'Etiketler'
  }
];
