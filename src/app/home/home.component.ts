import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StateService } from '@shared/services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private stateService: StateService) {}

  ngOnInit(): void {
    this.stateService.show();
  }
}
