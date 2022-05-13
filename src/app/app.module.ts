import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { JwtInterceptor } from '@auth/interceptors/jwt.interceptor';
import { MaterialModule } from '@modules/material/material.module';
import { SharedModule } from '@shared/shared.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '@environments/environment';
import { MAT_ICON_DEFAULT_OPTIONS } from '@angular/material/icon';
import { TitleStrategy } from '@angular/router';
import { AppTitleStrategy } from './core/app-title.strategy';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    MaterialModule,
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
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
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
    },
    {
      provide: TitleStrategy,
      useClass: AppTitleStrategy
    }
  ],
  bootstrap: []
})
export class AppModule {}
