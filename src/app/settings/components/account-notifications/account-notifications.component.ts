import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-account-notifications',
  standalone: true,
  imports: [MatExpansionModule, MatSlideToggleModule],
  templateUrl: './account-notifications.component.html',
  styleUrls: ['./account-notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountNotificationsComponent {
}
