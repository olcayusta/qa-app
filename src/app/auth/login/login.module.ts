import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatRippleModule,
    MatTooltipModule,
    SharedModule,
  ],
})
export class LoginModule {}
