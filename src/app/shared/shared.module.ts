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
import { PopupContainerComponent } from '@shared/components/popup-container/popup-container.component';
import { HighlightElementDirective } from './directives/highlight-element.directive';
import { SelectedTagPipe } from './pipes/selected-tag.pipe';
import { MyDatePipe } from './pipes/my-date.pipe';

@NgModule({
  declarations: [
    TimeAgoPipe,
    LazyImgDirective,
    GfIconComponent,
    AutofocusDirective,
    QListItemImgShadowComponent,
    PopupContainerComponent,
    SelectedTagPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    RelativeTimeFormatPipe,
    HighlightElementDirective,
    MyDatePipe,
    ImgShadowComponent,
    HomeQuestionListItemComponent
  ],
  exports: [
    HomeQuestionListItemComponent,
    GfIconComponent,
    ImgShadowComponent,
    TimeAgoPipe,
    LazyImgDirective,
    AutofocusDirective,
    PopupContainerComponent,
    HighlightElementDirective,
    MyDatePipe,
    RelativeTimeFormatPipe
  ]
})
export class SharedModule {}
