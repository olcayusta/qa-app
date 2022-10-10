import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImgDirective } from './directives/lazy-img.directive';
import { HomeQuestionListItemComponent } from './components/home-question-list-item/home-question-list-item.component';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { ImgShadowComponent } from './components/img-shadow/img-shadow.component';
import { GfIconComponent } from '@shared/components/gf-icon/gf-icon.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { RelativeTimeFormatPipe } from './pipes/relative-time-format.pipe';
import { QListItemImgShadowComponent } from './components/q-list-item-img-shadow/q-list-item-img-shadow.component';
import { HighlightElementDirective } from './directives/highlight-element.directive';
import { SelectedTagPipe } from './pipes/selected-tag.pipe';
import { MyDatePipe } from './pipes/my-date.pipe';
import { PopupContainerComponent } from '@shared/components/popup-container/popup-container.component';

@NgModule({
  declarations: [TimeAgoPipe, LazyImgDirective, AutofocusDirective, QListItemImgShadowComponent, SelectedTagPipe],
  imports: [
    CommonModule,
    RouterModule,
    HighlightElementDirective,
    MyDatePipe,
    HomeQuestionListItemComponent,
    RelativeTimeFormatPipe,
    PopupContainerComponent,
    ImgShadowComponent,
    GfIconComponent
  ],
  exports: [
    HomeQuestionListItemComponent,
    TimeAgoPipe,
    LazyImgDirective,
    AutofocusDirective,
    HighlightElementDirective,
    MyDatePipe,
    RelativeTimeFormatPipe,
    PopupContainerComponent,
    ImgShadowComponent,
    GfIconComponent
  ]
})
export class SharedModule {
}
