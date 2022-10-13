import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SettingsResolver } from './settings.resolver';

export default [
  {
    path: '',
    component: SettingsComponent,
    resolve: {
      user: SettingsResolver
    }
  }
] as Routes;
