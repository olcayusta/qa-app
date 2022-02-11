import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImgDirective } from './directives/lazy-img.directive';
import { HomeQuestionListItemComponent } from './components/home-question-list-item/home-question-list-item.component';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightSearchPipe } from '../main/components/top-bar/components/search-form/pipes/highlight-search.pipe';
import { ImgShadowComponent } from './components/img-shadow/img-shadow.component';
import { MarkedPipe } from '@shared/pipes/marked.pipe';
import { ShareDialogComponent } from './components/share-dialog/share-dialog.component';
import { HomeQuestionListItemAvatarComponent } from './components/home-question-list-item-avatar/home-question-list-item-avatar.component';
import { MaterialModule } from '@modules/material/material.module';
import { GfIconComponent } from '@shared/components/gf-icon/gf-icon.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { RelativeTimeFormatPipe } from './pipes/relative-time-format.pipe';
import { ShadowDenemeDirective } from './components/home-question-list-item/shadow-deneme.directive';
import { QListItemImgShadowComponent } from './components/q-list-item-img-shadow/q-list-item-img-shadow.component';
import {PopupContainerComponent} from "@shared/components/popup-container/popup-container.component";
import { HighlightElementDirective } from './directives/highlight-element.directive';
import { SiteCodeComponent } from './components/site-code/site-code.component';

@NgModule({
  declarations: [
    HomeQuestionListItemComponent,
    ImgShadowComponent,
    ShareDialogComponent,
    HomeQuestionListItemAvatarComponent,
    TimeAgoPipe,
    HighlightSearchPipe,
    MarkedPipe,
    LazyImgDirective,
    GfIconComponent,
    AutofocusDirective,
    RelativeTimeFormatPipe,
    ShadowDenemeDirective,
    QListItemImgShadowComponent,
    PopupContainerComponent,
    HighlightElementDirective,
    SiteCodeComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [
    HomeQuestionListItemComponent,
    GfIconComponent,
    ImgShadowComponent,
    HighlightSearchPipe,
    TimeAgoPipe,
    LazyImgDirective,
    AutofocusDirective,
    MarkedPipe,
    PopupContainerComponent,
    HighlightElementDirective,
  ],
})
export class SharedModule {}
