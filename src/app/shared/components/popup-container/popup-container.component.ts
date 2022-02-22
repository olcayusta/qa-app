import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'inek-popup-container',
  templateUrl: './popup-container.component.html',
  styleUrls: ['./popup-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupContainerComponent implements OnInit, OnDestroy {
  @Input('popupContainerTitle') title: string | undefined;
  @Input('outlet') outlet: any;

  @Output('close') close = new EventEmitter();

  subscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.router.events
      .pipe(filter((e): e is NavigationStart => e instanceof NavigationStart))
      .subscribe(({ navigationTrigger }) => {
        navigationTrigger === 'popstate' && this.close.emit(true);
      });
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
