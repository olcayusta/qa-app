import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageInternalServerErrorRoutingModule } from './page-internal-server-error-routing.module';
import { PageInternalServerErrorComponent } from './page-internal-server-error.component';


@NgModule({
  declarations: [
    PageInternalServerErrorComponent
  ],
  imports: [
    CommonModule,
    PageInternalServerErrorRoutingModule
  ]
})
export class PageInternalServerErrorModule { }
