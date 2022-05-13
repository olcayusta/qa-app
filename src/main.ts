import { enableProdMode, importProvidersFrom } from '@angular/core';

import { environment } from '@environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from '@auth/interceptors/jwt.interceptor';
import { HttpErrorInterceptor } from './app/core/interceptors/http-error.interceptor';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MAT_ICON_DEFAULT_OPTIONS } from '@angular/material/icon';
import { RouterModule, TitleStrategy } from '@angular/router';
import { AppTitleStrategy } from './app/core/app-title.strategy';
import { APP_ROUTES } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      RouterModule.forRoot(APP_ROUTES, {
        urlUpdateStrategy: 'eager',
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      }),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: environment.production,
        registrationStrategy: 'registerWhenStable:30000'
      })
    ),
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
  ]
}).catch((err) => console.error(err));
