import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountNumberFormatPipe } from '../../../src/app/pipes/account-number.pipe';
import { AccountNumberDomesticVrpFormatPipe } from '../../../src/app/pipes/account-number-domestic-vrp.pipe';
import { BalanceFormatPipe } from '../../../src/app/pipes/balance.pipe';
import { AmountFormatPipe } from '../../../src/app/pipes/amount.pipe';
import { MaximumAmountFormatPipe } from "../../../src/app/pipes/maximum-amount.pipe";
import { FrequencyFormatPipe } from '../../../src/app/pipes/frequency.pipe';
import { TranslatePipe } from '@ngx-translate/core';
import {AccountSortCodeFormatPipe} from "rcs/src/app/pipes/account-sort-code.pipe";
import {AccountFormatPipe} from "rcs/src/app/pipes/account.pipe";

@NgModule({
  imports: [CommonModule],
  declarations: [AccountFormatPipe, AccountNumberFormatPipe, AccountSortCodeFormatPipe, BalanceFormatPipe, AmountFormatPipe, MaximumAmountFormatPipe, FrequencyFormatPipe, AccountNumberDomesticVrpFormatPipe],
  exports: [AccountFormatPipe, AccountSortCodeFormatPipe, AccountNumberFormatPipe, BalanceFormatPipe, AmountFormatPipe, MaximumAmountFormatPipe, FrequencyFormatPipe, AccountNumberDomesticVrpFormatPipe],
  providers: [AmountFormatPipe, TranslatePipe]
})
export class BankPipesModule {}
