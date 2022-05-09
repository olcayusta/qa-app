import { Routes } from '@angular/router';

import { HelpComponent } from './help.component';
import { environment } from '@environments/environment';

export const ROUTES: Routes = [{ path: '', component: HelpComponent, title: `Yardım - ${environment.appTitle}` }];
