import { Routes } from '@angular/router';
import { LoginComponent } from '@auth/login/login.component';

export default [
  {
    path: '',
    component: LoginComponent,
    title: 'Oturum aç'
  }
] as Routes;
