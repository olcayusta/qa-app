import { Routes } from '@angular/router';
import { TagsComponent } from './tags.component';
import { inject } from '@angular/core';
import { TagsService } from './tags.service';

export default [
  {
    path: '',
    component: TagsComponent,
    resolve: {
      tags: () => inject(TagsService).getAllTags()
    },
    title: 'Etiketler'
  }
] as Routes;
