import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search.component';
import { SearchTitleResolver } from '@modules/search/resolvers/search-title.resolver';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    title: SearchTitleResolver
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule {}
