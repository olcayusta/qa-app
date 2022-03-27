import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HelpComponent],
  imports: [CommonModule, HelpRoutingModule, MatListModule, MatIconModule]
})
export class HelpModule {}
