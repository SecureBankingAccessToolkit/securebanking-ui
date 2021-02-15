import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { ForgerockPipesModule } from '@securebanking/securebanking-common-ui/pipes';
import { ForgerockMessagesModule } from '@securebanking/securebanking-common-ui/services/forgerock-messages';
import { ForgerockConfigModule } from '@securebanking/securebanking-common-ui/services/forgerock-config';
import { ForgerockSharedComponentsModule } from './components.module';
import { ForgerockSplashscreenModule } from '@securebanking/securebanking-common-ui/services/forgerock-splashscreen';
import { ForgerockCustomerCanAccessGuard } from '@securebanking/securebanking-common-ui/guards';
import { ForgerockGDPRModule } from '@securebanking/securebanking-common-ui/gdpr';

@NgModule({
  imports: [
    ForgerockPipesModule,
    ForgerockMessagesModule,
    ForgerockConfigModule,
    ForgerockSharedComponentsModule,
    ForgerockSplashscreenModule,
    ForgerockGDPRModule,
    TranslateModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    ForgerockPipesModule,
    ForgerockMessagesModule,
    ForgerockConfigModule,
    ForgerockSharedComponentsModule,
    ForgerockSplashscreenModule,
    ForgerockGDPRModule,
    TranslateModule,
    FlexLayoutModule,
    RouterModule
  ],
  providers: [ForgerockCustomerCanAccessGuard]
})
export class ForgerockSharedModule {}
