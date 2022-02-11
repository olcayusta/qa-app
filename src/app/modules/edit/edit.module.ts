import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [EditComponent],
  imports: [CommonModule, EditRoutingModule, MatInputModule]
})
export class EditModule {}
