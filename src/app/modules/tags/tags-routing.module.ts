import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagsComponent } from './tags.component';
import { TagsResolver } from './resolvers/tags.resolver';
import { environment } from '@environments/environment';

const routes: Routes = [
  {
    path: '',
    component: TagsComponent,
    resolve: { tags: TagsResolver },
    title: `Etiketler - ${environment.appTitle}`
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsRoutingModule {}
