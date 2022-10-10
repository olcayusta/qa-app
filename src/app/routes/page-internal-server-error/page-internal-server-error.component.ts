import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'apps-page-internal-server-error',
  standalone: true,
  templateUrl: './page-internal-server-error.component.html',
  styleUrls: ['./page-internal-server-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageInternalServerErrorComponent {
}
