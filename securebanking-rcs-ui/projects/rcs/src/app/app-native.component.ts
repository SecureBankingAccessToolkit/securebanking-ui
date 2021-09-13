import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';

import { ForgerockSplashscreenService } from '@securebanking/securebanking-common-ui/services/forgerock-splashscreen';
//import { ForgerockGDPRService } from '@securebanking/securebanking-common-ui/gdpr';
import {
  ForgerockNativeSplashscreenService,
  ForgerockNativeDeepLinkService
} from '@securebanking/securebanking-common-ui/native';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppNativeComponent {

  constructor(
    @Inject(DOCUMENT) private document: any,
    private splashscreenService: ForgerockSplashscreenService,
    private translateService: TranslateService,
    private platform: Platform,
    //private gdprService: ForgerockGDPRService,
    private nativeSplashscreen: ForgerockNativeSplashscreenService,
    private nativeDeeplink: ForgerockNativeDeepLinkService
  ) {
    this.nativeDeeplink.init();
    this.splashscreenService.init();
    //this.gdprService.init();
    this.nativeSplashscreen.hide();

    this.translateService.addLangs(['en', 'fr']);
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.translateService.getBrowserLang() || 'en');

    // Add is-mobile class to the body if the platform is mobile
    if (this.platform.ANDROID || this.platform.IOS) {
      this.document.body.classList.add('is-mobile');
    }
  }
}
