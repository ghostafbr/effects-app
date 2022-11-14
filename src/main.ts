import {enableProdMode, importProvidersFrom} from '@angular/core';
import { environment } from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AppRouting} from "./app/app-routing";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {appReducers} from "./app/store/app.reducers";
import {EffectsModule} from "@ngrx/effects";
import {EffectsArray} from "./app/store/effects";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      RouterModule.forRoot(AppRouting, {useHash: true}),
      StoreModule.forRoot(appReducers),
      EffectsModule.forRoot(EffectsArray),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: environment.production,
      }),
    )
  ],
}).catch( err => console.error(err));
