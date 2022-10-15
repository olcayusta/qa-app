import { NgModule } from '@angular/core';
import { RelativeTimeFormatPipe } from './pipes/relative-time-format.pipe';
import { HighlightElementDirective } from './directives/highlight-element.directive';
import { SelectedTagPipe } from './pipes/selected-tag.pipe';
import { MyDatePipe } from './pipes/my-date.pipe';

@NgModule({
  declarations: [SelectedTagPipe],
  imports: [
    HighlightElementDirective,
    MyDatePipe,
    RelativeTimeFormatPipe,
  ],
  exports: [
    HighlightElementDirective,
    MyDatePipe,
    RelativeTimeFormatPipe,
  ]
})
export class SharedModule {
}
