import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { StickyDirective } from './main/components/top-bar/directives/sticky.directive';
import { JwtInterceptor } from '@auth/interceptors/jwt.interceptor';

/* Modules */
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@modules/material/material.module';
import { MainLayoutModule } from './main-layout/main-layout.module';
import { SharedModule } from '@shared/shared.module';

/* Components */
import { TopBarComponent } from './main/components/top-bar/top-bar.component';
import { SideSheetComponent } from './main/components/side-sheet/side-sheet.component';
import { SearchFormComponent } from './main/components/top-bar/components/search-form/search-form.component';
import { NavDrawerComponent } from './main/components/nav-drawer/nav-drawer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environments/environment';
import { ThemeTogleComponent } from './theme-togle/theme-togle.component';
import { TopAppBarLogoComponent } from './main/components/top-bar/components/top-app-bar-logo/top-app-bar-logo.component';
import { FeedbackDialogComponent } from '@dialogs/feedback-dialog/feedback-dialog.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

/* Locale initialization */

/*import { registerLocaleData } from '@angular/common';
import localeTr from '@angular/common/locales/tr';
registerLocaleData(localeTr);*/

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    SideSheetComponent,
    SearchFormComponent,
    NavDrawerComponent,
    StickyDirective,
    ThemeTogleComponent,
    TopAppBarLogoComponent,
    FeedbackDialogComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    MainLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    // { provide: LOCALE_ID, useValue: 'tr-TR' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { horizontalPosition: 'start', duration: 4000 }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
