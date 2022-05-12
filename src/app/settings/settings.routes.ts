import { Routes } from '@angular/router';

import { SettingsComponent } from './settings.component';
import { SettingsResolver } from './resolvers/settings.resolver';

export const ROUTES: Routes = [
  {
    path: '',
    component: SettingsComponent,
    resolve: { user: SettingsResolver }
  }
];
