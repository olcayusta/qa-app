import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { SettingsResolver } from '@modules/settings/resolvers/settings.resolver';

const routes: Routes = [
  { path: '', component: SettingsComponent, resolve: { user: SettingsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
