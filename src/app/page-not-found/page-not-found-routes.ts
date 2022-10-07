import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

export default [
  {
    path: '',
    component: PageNotFoundComponent,
    title: 'Sayfa bulunamadı'
  }
] as Routes;
