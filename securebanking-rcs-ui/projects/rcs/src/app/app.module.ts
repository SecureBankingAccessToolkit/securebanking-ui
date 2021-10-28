import { NgModule, InjectionToken, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { AppComponent } from '../../src/app/app.component';
import { environment } from '../../src/environments/environment';
import rootReducer from '../../src/store';

import { AppRoutingModule } from './app-routing.module';
import { ForgerockConfigService } from '@securebanking/securebanking-common-ui/services/forgerock-config';
import { ForgerockConfigModule } from '@securebanking/securebanking-common-ui/services/forgerock-config';

import {MatDialogModule} from "@angular/material/dialog";

import { ForgerockSharedModule } from '@securebanking/securebanking-common-ui/shared';
import {CookieModule} from "ngx-cookie";
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<{}>>('Registered Reducers');

export function getReducers() {
  return rootReducer;
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function init_app(appConfig: ForgerockConfigService) {
  return () => appConfig.fetchAndMerge(environment);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CookieModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    ForgerockSharedModule,
    MatDialogModule,
    // Store
    StoreModule.forRoot(REDUCER_TOKEN),
    environment.devModules || [],
    ForgerockConfigModule.forRoot()
  ],
  providers: [
    {
      provide: REDUCER_TOKEN,
      deps: [],
      useFactory: getReducers
    },
    {
      provide: APP_INITIALIZER,
      useFactory: init_app,
      deps: [ForgerockConfigService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
