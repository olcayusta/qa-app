import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsResolver } from './settings.resolver';

export const settingsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    resolve: {
      user: SettingsResolver
    }
  }
];
