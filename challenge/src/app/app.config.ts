import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import {INJECTABLES, routes} from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {provideHttpClient, withFetch} from "@angular/common/http";
import {AuthEffects, authReducer, ErrorEffects, LocationEffects, locationReducer} from "@challenge/state";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideIonicAngular({}),
    provideEffects(AuthEffects, LocationEffects, ErrorEffects),
    provideStore({location: locationReducer, auth: authReducer}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withFetch()),
    ...INJECTABLES
  ]
};
