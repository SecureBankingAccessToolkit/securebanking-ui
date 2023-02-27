import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ForgerockCustomerIconComponent } from './forgerock-customer-icon.component';
import { ForgerockConfigModule } from '@secureapigateway/secure-api-gateway-ob-uk-ui-common/services/forgerock-config';
import { ForgerockCustomerSVGModule } from '@secureapigateway/secure-api-gateway-ob-uk-ui-common/components/forgerock-customer-svg';

@NgModule({
  imports: [CommonModule, StoreModule, ForgerockConfigModule, ForgerockCustomerSVGModule],
  declarations: [ForgerockCustomerIconComponent],
  exports: [ForgerockCustomerIconComponent]
})
export class ForgerockCustomerIconModule {}
