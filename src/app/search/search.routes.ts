import { Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchTitleResolver } from './resolvers/search-title.resolver';

export default [
  {
    path: '',
    component: SearchComponent,
    title: SearchTitleResolver
  }
] as Routes;
