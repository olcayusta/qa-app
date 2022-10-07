import { Routes } from '@angular/router';
import { PageInternalServerErrorComponent } from './page-internal-server-error.component';

export default [
  {
    path: '',
    component: PageInternalServerErrorComponent,
    title: 'En kısa sürede döneceğiz.'
  }
] as Routes;
