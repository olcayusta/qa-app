import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  ResolveEnd,
  ResolveStart,
  Router
} from '@angular/router';
import { SpinnerService } from '@shared/services/spinner.service';

@Component({
  selector: 'inek-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressBarComponent implements OnInit {
  spinner$!: Observable<boolean>;

  constructor(private router: Router, private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof ResolveStart) {
        this.spinnerService.show();
      }

      if (event instanceof ResolveEnd) {
        this.spinnerService.hide();
      }

      /*      if (event instanceof (ResolveEnd || NavigationCancel || NavigationError || NavigationEnd)) {
        this.spinnerService.hide();
      }*/
    });

    this.spinner$ = this.spinnerService.subject$;
  }
}