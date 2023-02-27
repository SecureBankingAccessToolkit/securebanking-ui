import { NgModule } from '@angular/core';

import { ForgerockCustomerIconModule } from '@secureapigateway/secure-api-gateway-ob-uk-ui-common/components/forgerock-customer-icon';
import { ForgerockCustomerLogoModule } from '@secureapigateway/secure-api-gateway-ob-uk-ui-common/components/forgerock-customer-logo';
import { ForgerockAlertModule } from '@secureapigateway/secure-api-gateway-ob-uk-ui-common/components/forgerock-alert';

@NgModule({
  imports: [ForgerockCustomerIconModule, ForgerockCustomerLogoModule, ForgerockAlertModule],
  exports: [ForgerockCustomerIconModule, ForgerockCustomerLogoModule, ForgerockAlertModule]
})
export class ForgerockSharedComponentsModule {}
