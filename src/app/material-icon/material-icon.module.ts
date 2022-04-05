import { NgModule } from '@angular/core';
import { NotificationsIconComponent } from './icons/notifications-icon/notifications-icon.component';
import { SearchIconComponent } from './icons/search/search-icon.component';
import { MatIconMenuComponent } from './icons/mat-icon-menu/mat-icon-menu.component';
import { MatIconFormatBoldComponent } from './icons/mat-icon-format-bold/mat-icon-format-bold.component';
import { MatIconFormatItalicComponent } from './icons/mat-icon-format-italic/mat-icon-format-italic.component';
import { MatIconStrikethroughSComponent } from './icons/mat-icon-strikethrough-s/mat-icon-strikethrough-s.component';
import { MatIconTitleComponent } from './icons/mat-icon-title/mat-icon-title.component';
import { MatIconFormatQuoteComponent } from './icons/mat-icon-format-quote/mat-icon-format-quote.component';

@NgModule({
  declarations: [
    NotificationsIconComponent,
    SearchIconComponent,
    MatIconMenuComponent,
    MatIconFormatBoldComponent,
    MatIconFormatItalicComponent,
    MatIconStrikethroughSComponent,
    MatIconTitleComponent,
    MatIconFormatQuoteComponent
  ],
  exports: [
    NotificationsIconComponent,
    SearchIconComponent,
    MatIconFormatBoldComponent,
    MatIconMenuComponent,
    MatIconFormatItalicComponent,
    MatIconStrikethroughSComponent,
    MatIconTitleComponent,
    MatIconFormatQuoteComponent
  ]
})
export class MaterialIconModule {}
