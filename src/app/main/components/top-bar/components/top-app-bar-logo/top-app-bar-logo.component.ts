import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-app-bar-logo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './top-app-bar-logo.component.html',
  styleUrls: ['./top-app-bar-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopAppBarLogoComponent {}
