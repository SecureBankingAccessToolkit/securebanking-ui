import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountNumberFormatPipe } from '../../../src/app/pipes/account-number.pipe';
import { BalanceFormatPipe } from '../../../src/app/pipes/balance.pipe';
import { AmountFormatPipe } from '../../../src/app/pipes/amount.pipe';
import { FrequencyFormatPipe } from '../../../src/app/pipes/frequency.pipe';
import { TranslatePipe } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule],
  declarations: [AccountNumberFormatPipe, BalanceFormatPipe, AmountFormatPipe, FrequencyFormatPipe],
  exports: [AccountNumberFormatPipe, BalanceFormatPipe, AmountFormatPipe, FrequencyFormatPipe],
  providers: [AmountFormatPipe, TranslatePipe]
})
export class BankPipesModule {}
