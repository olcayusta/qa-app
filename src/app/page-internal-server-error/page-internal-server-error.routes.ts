import { Routes } from '@angular/router';
import { PageInternalServerErrorComponent } from './page-internal-server-error.component';

export const PAGE_INTERNAL_SERVER_ERROR_ROUTES: Routes = [
  {
    path: '',
    component: PageInternalServerErrorComponent,
    title: 'En kısa sürede döneceğiz.'
  }
];
