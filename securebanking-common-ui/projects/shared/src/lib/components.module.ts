import { NgModule } from '@angular/core';

import { ForgerockCustomerIconModule } from '@securebanking/securebanking-common-ui/components/forgerock-customer-icon';
import { ForgerockCustomerLogoModule } from '@securebanking/securebanking-common-ui/components/forgerock-customer-logo';
import { ForgerockAlertModule } from '@securebanking/securebanking-common-ui/components/forgerock-alert';

@NgModule({
  imports: [ForgerockCustomerIconModule, ForgerockCustomerLogoModule, ForgerockAlertModule],
  exports: [ForgerockCustomerIconModule, ForgerockCustomerLogoModule, ForgerockAlertModule]
})
export class ForgerockSharedComponentsModule {}
