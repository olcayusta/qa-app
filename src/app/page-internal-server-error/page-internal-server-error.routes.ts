import { Routes } from '@angular/router';
import { PageInternalServerErrorComponent } from './page-internal-server-error.component';

export const pageInternalServerErrorRoutes: Routes = [
  {
    path: '',
    component: PageInternalServerErrorComponent,
    title: 'En kısa sürede döneceğiz.'
  }
];
