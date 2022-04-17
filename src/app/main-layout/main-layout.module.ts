import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@shared/shared.module';
import { ExtendedFabDirective } from '../main/directives/extended-fab.directive';

@NgModule({
  declarations: [ExtendedFabDirective],
  exports: [ExtendedFabDirective],
  imports: [CommonModule, MaterialModule, SharedModule]
})
export class MainLayoutModule {}
