import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ForgerockCustomerFaviconComponent } from './forgerock-customer-favicon.component';
import { ForgerockConfigModule } from '@secureapigateway/secure-api-gateway-ob-uk-ui-common/services/forgerock-config';
import { ForgerockCustomerSVGModule } from '@secureapigateway/secure-api-gateway-ob-uk-ui-common/components/forgerock-customer-svg';

@NgModule({
  imports: [CommonModule, StoreModule, ForgerockConfigModule, ForgerockCustomerSVGModule],
  declarations: [ForgerockCustomerFaviconComponent],
  exports: [ForgerockCustomerFaviconComponent]
})
export class ForgerockCustomerFaviconModule {}
