import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '@shared/services/state.service';
import { SocketService } from '@shared/services/socket.service';
import { Subscription } from 'rxjs';
import { CloseScrollStrategy, Overlay } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MAT_MENU_SCROLL_STRATEGY, MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BannerComponent } from './components/banner/banner.component';
import { FilterComponent } from './components/filter/filter.component';
import { SortByComponent } from './components/filter/components/sort-by/sort-by.component';
import { FilterByComponent } from './components/filter/components/filter-by/filter-by.component';
import { HomeGridListComponent } from './components/home-grid-list/home-grid-list.component';
import { IsVisibleDirective } from './directives/is-visible.directive';

function scrollFactory(overlay: Overlay): () => CloseScrollStrategy {
  return () => overlay.scrollStrategies.close();
}

@Component({
  selector: 'inek-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatButtonModule,
    MatDividerModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule,
    MatCheckboxModule,
    BannerComponent,
    FilterComponent,
    SortByComponent,
    FilterByComponent,
    HomeGridListComponent,
    IsVisibleDirective
  ],
  providers: [
    {
      provide: MAT_MENU_SCROLL_STRATEGY,
      useFactory: scrollFactory,
      deps: [Overlay]
    }
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  constructor(private socketService: SocketService, private stateService: StateService) {}

  ngOnInit(): void {
    this.subscription = this.socketService.watch('watch', 'home').subscribe((value) => {
      console.log(value);
    });

    this.stateService.show();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
