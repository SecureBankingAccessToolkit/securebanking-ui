import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ForgerockAuthApiService } from './forgerock-auth-api.service';
import { ForgerockConfigModule } from '@secureapigateway/secure-api-gateway-ob-uk-ui-common/services/forgerock-config';

@NgModule({
  imports: [CommonModule, HttpClientModule, ForgerockConfigModule],
  declarations: [],
  providers: [ForgerockAuthApiService]
})
export class ForgerockAuthApiModule {}
