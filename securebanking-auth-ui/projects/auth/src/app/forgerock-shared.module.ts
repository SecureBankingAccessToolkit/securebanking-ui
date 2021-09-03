import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ForgerockPipesModule } from '@securebanking/securebanking-common-ui/pipes';
import { ForgerockMessagesModule } from '@securebanking/securebanking-common-ui/services/forgerock-messages';
import { ForgerockConfigModule } from '@securebanking/securebanking-common-ui/services/forgerock-config';

@NgModule({
  imports: [ForgerockPipesModule, FlexLayoutModule, ForgerockMessagesModule, ForgerockConfigModule],
  exports: [ForgerockPipesModule, FlexLayoutModule, ForgerockMessagesModule, ForgerockConfigModule]
})
export class ForgerockSharedModule {}
