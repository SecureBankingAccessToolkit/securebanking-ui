import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import _get from 'lodash-es/get';

import { ApiResponses } from '../../../../../src/app/types/api';
import { Item, ItemType, IConsentEventEmitter } from '../../../../../src/app/types/consentItem';
import { ConsentDecision } from '../../../../../src/app/types/ConsentDecision';

@Component({
  selector: 'app-consent-international-payment',
  templateUrl: './international-payment.component.html',
  styleUrls: ['./international-payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InternationalPaymentComponent implements OnInit {
  constructor() {}

  form: FormGroup = new FormGroup({
    selectedAccount: new FormControl('', Validators.required)
  });

  @Input() response: ApiResponses.ConsentDetailsResponse;
  _loading = false;
  @Input() set loading(isLoading: boolean) {
    this.form[isLoading ? 'disable' : 'enable']();
    this._loading = isLoading;
  }
  @Output() formSubmit = new EventEmitter<IConsentEventEmitter>();
  basicItems: Item[] = [];
  rateItems: Item[] = [];

  ngOnInit() {
    if (!this.response) {
      return;
    }

    this.basicItems.push({
      type: ItemType.STRING,
      payload: {
        label: 'CONSENT.PAYMENT.PAYEE_NAME',
        value: this.response.merchantName,
        cssClass: 'international-payment-merchantName'
      }
    });
    this.basicItems.push({
      type: ItemType.STRING,
      payload: {
        label: 'CONSENT.PAYMENT.ACCOUNT',
        value: this.response.account,
        cssClass: 'international-payment-account'
      }
    });
    this.basicItems.push({
      type: ItemType.STRING,
      payload: {
        label: 'CONSENT.PAYMENT.PAYMENT_REFERENCE',
        value: this.response.paymentReference,
        cssClass: 'international-payment-paymentReference'
      }
    });
    this.basicItems.push({
      type: ItemType.INSTRUCTED_AMOUNT,
      payload: {
        label: 'CONSENT.PAYMENT.AMOUNT',
        amount: this.response.instructedAmount,
        cssClass: 'international-payment-instructedAmount'
      }
    });

    if (_get(this.response, 'exchangeRateInformation.unitCurrency')) {
      this.basicItems.push({
        type: ItemType.STRING,
        payload: {
          label: 'CONSENT.PAYMENT.CURRENCY_FROM',
          value: this.response.exchangeRateInformation.unitCurrency,
          cssClass: 'international-payment-rate'
        }
      });
    }

    this.basicItems.push({
      type: ItemType.STRING,
      payload: {
        label: 'CONSENT.PAYMENT.CURRENCY_TO',
        value: this.response.currencyOfTransfer,
        cssClass: 'international-payment-currency-of-transfer'
      }
    });

    this.basicItems.push({
      type: ItemType.EXCHANGE_RATE,
      payload: {
        label: 'CONSENT.INTERNATIONAL-PAYMENT.EXCHANGE_RATE',
        value:
          this.response.exchangeRateInformation && this.response.currencyOfTransfer
            ? `1.0 ${this.response.exchangeRateInformation.unitCurrency} = ${this.response.exchangeRateInformation.exchangeRate} ${
                this.response.currencyOfTransfer
              }`
            : '',
        rate: this.response.exchangeRateInformation,
        currencyOfTransfer: this.response.currencyOfTransfer,
        cssClass: 'international-payment-rate'
      }
    });

    this.rateItems.push({
      type: ItemType.RATE_AMOUNT,
      payload: {
        label: 'CONSENT.PAYMENT.AMOUNT',
        amount: this.response.instructedAmount,
        rate: this.response.exchangeRateInformation,
        currencyOfTransfer: this.response.currencyOfTransfer,
        cssClass: 'international-payment-rate'
      }
    });

    if (_get(this.response, 'charges.amount')) {
      this.rateItems.push({
        type: ItemType.STRING,
        payload: {
          label: 'CONSENT.PAYMENT.CHARGES',
          value: this.response.charges.amount + ' ' + this.response.charges.currency,
          cssClass: 'international-payment-charges'
        }
      });
    } else if(_get(this.response, 'exchangeRateInformation.unitCurrency')){
      this.rateItems.push({
        type: ItemType.STRING,
        payload: {
          label: 'CONSENT.PAYMENT.CHARGES',
          value: '0.0 ' + this.response.exchangeRateInformation.unitCurrency,
          cssClass: 'international-payment-charges'
        }
      });
    }

    this.rateItems.push({
      type: ItemType.INSTRUCTED_AMOUNT,
      payload: {
        label: 'CONSENT.INTERNATIONAL-PAYMENT.AMOUNT_TO_PAY',
        amount: this.response.instructedAmount,
        cssClass: 'international-payment-amount-to-pay'
      }
    });
  }

  submit(allowing = false) {
    this.formSubmit.emit({
      decision: allowing ? ConsentDecision.AUTHORISED : ConsentDecision.REJECTED,
      debtorAccount: this.form.value.selectedAccount
    });
  }
}
