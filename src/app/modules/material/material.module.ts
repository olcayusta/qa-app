import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  exports: [
    MatListModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatChipsModule,
    MatDividerModule,
    MatDialogModule,
    MatRippleModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatMenuModule,
    MatRadioModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatSidenavModule,
    OverlayModule,
  ],
})
export class MaterialModule {}
