import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelpComponent } from './help.component';
import { environment } from '@environments/environment';

const routes: Routes = [
  { path: '', component: HelpComponent, title: `Yardım - ${environment.appTitle}` }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule {}
