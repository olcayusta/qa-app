import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Event, NavigationCancel, NavigationError, ResolveEnd, ResolveStart, Router } from '@angular/router';
import { SpinnerService } from '@shared/services/spinner.service';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {
  spinner$!: Observable<boolean>;

  constructor(private router: Router, private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof ResolveStart) {
        this.spinnerService.show();
      }

      if (event instanceof ResolveEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.spinnerService.hide();
      }
    });

    this.spinner$ = this.spinnerService.subject$;
  }
}
