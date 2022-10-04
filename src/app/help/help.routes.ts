import { Routes } from '@angular/router';
import { HelpComponent } from './help.component';
import { environment } from '@environments/environment';

export const HELP_ROUTES: Routes = [
  {
    path: '',
    component: HelpComponent,
    title: `Yardım - ${environment.appTitle}`
  }
];
