import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, MaterialModule, SharedModule]
})
export class MainLayoutModule {}
