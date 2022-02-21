import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '@shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FilterComponent } from './components/filter/filter.component';
import { MAT_MENU_SCROLL_STRATEGY, MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IsVisibleDirective } from './directives/is-visible.directive';
import { MatButtonModule } from '@angular/material/button';
import { BannerComponent } from './components/banner/banner.component';
import { MatDividerModule } from '@angular/material/divider';
import { SortByComponent } from './components/filter/components/sort-by/sort-by.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CloseScrollStrategy, Overlay } from '@angular/cdk/overlay';
import { FilterByComponent } from './components/filter/components/filter-by/filter-by.component';
import { HomeGridListComponent } from './components/home-grid-list/home-grid-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';

function scrollFactory(overlay: Overlay): () => CloseScrollStrategy {
  return () => overlay.scrollStrategies.close();
}

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    FilterComponent,
    IsVisibleDirective,
    SortByComponent,
    FilterByComponent,
    HomeGridListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatTooltipModule
  ],
  providers: [
    {
      provide: MAT_MENU_SCROLL_STRATEGY,
      useFactory: scrollFactory,
      deps: [Overlay]
    }
  ]
})
export class HomeModule {}
