import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-app-bar-logo',
  templateUrl: './top-app-bar-logo.component.html',
  styleUrls: ['./top-app-bar-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [RouterModule]
})
export class TopAppBarLogoComponent {}
