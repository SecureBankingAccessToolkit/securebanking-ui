import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppNativeModule } from '../src/app/app-native.module';
import { environment } from '../src/environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppNativeModule)
  .catch(err => console.log(err));
