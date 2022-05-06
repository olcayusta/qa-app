import { Routes } from '@angular/router';

import { SearchComponent } from './search.component';
import { SearchTitleResolver } from './resolvers/search-title.resolver';

export const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    title: SearchTitleResolver
  }
];
