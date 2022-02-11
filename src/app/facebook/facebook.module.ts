import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent } from './facebook.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [FacebookComponent],
  imports: [CommonModule, FacebookRoutingModule, MatButtonModule],
})
export class FacebookModule {}
