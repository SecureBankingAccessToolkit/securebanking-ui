import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { ForgerockCustomerFaviconComponent } from './forgerock-customer-favicon.component';
import { ForgerockConfigModule } from '@securebanking/securebanking-common-ui/services/forgerock-config';
import { ForgerockCustomerSVGModule } from '@securebanking/securebanking-common-ui/components/forgerock-customer-svg';

@NgModule({
  imports: [CommonModule, StoreModule, ForgerockConfigModule, ForgerockCustomerSVGModule],
  declarations: [ForgerockCustomerFaviconComponent],
  exports: [ForgerockCustomerFaviconComponent]
})
export class ForgerockCustomerFaviconModule {}
