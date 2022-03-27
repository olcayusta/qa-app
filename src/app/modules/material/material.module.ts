import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  exports: [
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialModule {}
