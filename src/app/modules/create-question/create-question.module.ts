import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateQuestionRoutingModule } from './create-question-routing.module';
import { CreateQuestionComponent } from './create-question.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipsAutocompleteComponent } from './components/chips-autocomplete/chips-autocomplete.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@modules/material/material.module';

@NgModule({
  declarations: [CreateQuestionComponent, ChipsAutocompleteComponent],
  imports: [
    CommonModule,
    CreateQuestionRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MaterialModule,
    SharedModule
  ]
})
export class CreateQuestionModule {}
