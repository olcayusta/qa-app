import { Routes } from '@angular/router';
import { PageInternalServerErrorComponent } from '@modules/page-internal-server-error/page-internal-server-error.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: PageInternalServerErrorComponent,
    title: 'En kısa sürede döneceğiz.'
  }
];
