import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { environment } from '@environments/environment';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent,
    title: `Sayfa bulunamadı - ${environment.appTitle}`
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageNotFoundRoutingModule {}
