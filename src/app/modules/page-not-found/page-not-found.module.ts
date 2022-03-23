import { NgModule } from '@angular/core';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './components/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [PageNotFoundRoutingModule]
})
export class PageNotFoundModule {}
