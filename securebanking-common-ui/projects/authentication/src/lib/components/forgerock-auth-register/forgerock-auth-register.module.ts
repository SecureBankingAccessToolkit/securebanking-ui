import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { TranslateModule } from '@ngx-translate/core';

import { ForgerockAuthRegisterComponent } from './forgerock-auth-register.component';
import { CanDeactivateGuard } from '@securebanking/securebanking-common-ui/guards';
import { ForgerockConfirmDialogModule } from '@securebanking/securebanking-common-ui/components/forgerock-confirm-dialog';
import { ForgerockCustomerLogoModule } from '@securebanking/securebanking-common-ui/components/forgerock-customer-logo';
import { ForgerockAlertModule } from '@securebanking/securebanking-common-ui/components/forgerock-alert';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ForgerockConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    ForgerockCustomerLogoModule,
    ForgerockAlertModule
  ],
  declarations: [ForgerockAuthRegisterComponent],
  providers: [CanDeactivateGuard]
})
export class ForgerockAuthRegisterModule {}
