import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { StateService } from '@shared/services/state.service';
import { SocketService } from '@shared/services/socket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'inek-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
