import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeQuestionListItemComponent } from '@components/home-question-list-item/home-question-list-item.component';
import { RouterModule } from '@angular/router';
import { ImgShadowComponent } from '@components/components/img-shadow/img-shadow.component';
import { RelativeTimeFormatPipe } from './pipes/relative-time-format.pipe';
import { HighlightElementDirective } from './directives/highlight-element.directive';
import { SelectedTagPipe } from './pipes/selected-tag.pipe';
import { MyDatePipe } from './pipes/my-date.pipe';
import { PopupContainerComponent } from '@shared/../components/popup-container/popup-container.component';

@NgModule({
  declarations: [SelectedTagPipe],
  imports: [
    CommonModule,
    RouterModule,
    HighlightElementDirective,
    MyDatePipe,
    HomeQuestionListItemComponent,
    RelativeTimeFormatPipe,
    PopupContainerComponent,
    ImgShadowComponent,
  ],
  exports: [
    HomeQuestionListItemComponent,
    HighlightElementDirective,
    MyDatePipe,
    RelativeTimeFormatPipe,
    PopupContainerComponent,
    ImgShadowComponent,
  ]
})
export class SharedModule {
}
