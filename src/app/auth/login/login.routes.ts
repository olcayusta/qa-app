import { Routes } from '@angular/router';
import { LoginComponent } from '@auth/login/login.component';

export const LOGIN_ROUTES: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'Oturum aç'
  }
];
