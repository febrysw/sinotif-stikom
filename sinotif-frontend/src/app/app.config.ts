import {
  ApplicationConfig,
  LOCALE_ID,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './core/interceptors/http.interceptor';
import localeId from '@angular/common/locales/id';
import { IMAGE_CONFIG, registerLocaleData } from '@angular/common';
import {
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig,
  HammerModule,
} from '@angular/platform-browser';
registerLocaleData(localeId);
// import * as Hammer from 'hammerjs';

// export class MyHammerConfig extends HammerGestureConfig {
//   overides = <any>{
//     swipe: { direction: Hammer.DIRECTION_ALL },
//   };
// }

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([httpInterceptor])),
    importProvidersFrom(BrowserAnimationsModule),
    { provide: LOCALE_ID, useValue: 'id-ID' },
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true,
      },
    },
    // HammerModule,
    // { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig },
  ],
};
