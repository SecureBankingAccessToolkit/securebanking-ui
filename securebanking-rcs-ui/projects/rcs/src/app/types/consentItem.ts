import {OBCashAccount3} from "rcs/src/app/types/ob";

export enum ItemType {
  STRING = 'STRING',
  RATE_AMOUNT = 'RATE_AMOUNT',
  RECURRING_PAYMENT = 'RECURRING_PAYMENT',
  INSTRUCTED_AMOUNT = 'INSTRUCTED_AMOUNT',
  FIRST_PAYMENT = 'FIRST_PAYMENT',
  FINAL_PAYMENT = 'FINAL_PAYMENT',
  EXCHANGE_RATE = 'EXCHANGE_RATE',
  DATE = 'DATE',
  ACCOUNT_NUMBER = 'ACCOUNT_NUMBER',
  TRANSACTION_PERIOD = 'TRANSACTION_PERIOD',
  VRP_ACCOUNT_NUMBER = 'VRP_ACCOUNT_NUMBER'
}

export interface Item {
  type: ItemType;
  payload: any;
}

export interface IConsentEventEmitter {
  decision: string;
  accountIds?: string[];
  debtorAccount?: OBCashAccount3;
}
