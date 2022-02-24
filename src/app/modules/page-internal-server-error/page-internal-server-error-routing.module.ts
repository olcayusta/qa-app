import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInternalServerErrorComponent } from './page-internal-server-error.component';

const routes: Routes = [{ path: '', component: PageInternalServerErrorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageInternalServerErrorRoutingModule { }
