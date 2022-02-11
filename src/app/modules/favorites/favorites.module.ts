import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './favorites.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, FavoritesRoutingModule, MatButtonModule, MatIconModule]
})
export class FavoritesModule {}
