import { Routes } from '@angular/router';
import { HelpComponent } from './help.component';
import { environment } from '@environments/environment';

export const helpRoutes: Routes = [
  {
    path: '',
    component: HelpComponent,
    title: `Yardım - ${environment.appTitle}`
  }
];
