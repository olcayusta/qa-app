import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  exports: [
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatBottomSheetModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatRippleModule,
    MatTabsModule
  ]
})
export class MaterialModule {}
