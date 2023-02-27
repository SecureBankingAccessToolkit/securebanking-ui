import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ForgerockCustomerLogoComponent } from './forgerock-customer-logo.component';
import { ForgerockConfigModule } from '@secureapigateway/secure-api-gateway-ob-uk-ui-common/services/forgerock-config';
import { ForgerockCustomerSVGModule } from '@secureapigateway/secure-api-gateway-ob-uk-ui-common/components/forgerock-customer-svg';

@NgModule({
  imports: [CommonModule, StoreModule, ForgerockConfigModule, ForgerockCustomerSVGModule],
  declarations: [ForgerockCustomerLogoComponent],
  exports: [ForgerockCustomerLogoComponent]
})
export class ForgerockCustomerLogoModule {}
