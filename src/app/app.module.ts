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
import { SearchFormComponent } from './main/components/top-bar/components/search-form/search-form.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environments/environment';
import { ThemeTogleComponent } from './theme-togle/theme-togle.component';
import { TopAppBarLogoComponent } from './main/components/top-bar/components/top-app-bar-logo/top-app-bar-logo.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { WatchedTagListDialogComponent } from '@dialogs/watched-tag-list-dialog/watched-tag-list-dialog.component';
import { ProfilePictureDialogComponent } from '@dialogs/profile-picture-dialog/profile-picture-dialog.component';
import { MAT_ICON_DEFAULT_OPTIONS } from '@angular/material/icon';
import { BroadcastChannelLogoutDialogComponent } from './broadcast-channel-logout-dialog/broadcast-channel-logout-dialog.component';
import { GoogleIconComponent } from './google-icon/google-icon.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopBarComponent,
    SearchFormComponent,
    StickyDirective,
    ThemeTogleComponent,
    TopAppBarLogoComponent,
    ProgressBarComponent,
    WatchedTagListDialogComponent,
    ProfilePictureDialogComponent,
    BroadcastChannelLogoutDialogComponent,
    GoogleIconComponent,
    WelcomeComponent
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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { horizontalPosition: 'start', duration: 4000 }
    },
    {
      provide: MAT_ICON_DEFAULT_OPTIONS,
      useValue: {
        fontSet: 'material-icons-outlined'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
