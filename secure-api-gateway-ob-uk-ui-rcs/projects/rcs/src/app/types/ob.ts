import { OBBalanceType1Code, OBCreditDebitCode } from '../../../src/app/types/ob.enum';

export interface OBAccount2 {
  accountId: string;
  currency: string;
  nickname: string;
  accounts: OBCashAccount3[];
}

export interface OBCashAccount3 {
  schemeName: string;
  identification: string;
  name: string;
  secondaryIdentification: string;
}

export class OBActiveOrHistoricCurrencyAndAmount {
  amount?: number;
  currency?: string;
}

export class MaximumIndividualAmount {
  amount?: number;
  currency?: string;
}

export interface OBCashBalance1 {
  creditDebitIndicator: OBCreditDebitCode;
  type: OBBalanceType1Code;
  amount: OBActiveOrHistoricCurrencyAndAmount;
}
