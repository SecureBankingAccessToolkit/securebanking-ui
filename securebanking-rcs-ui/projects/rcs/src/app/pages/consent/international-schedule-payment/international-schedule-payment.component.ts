import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import _get from 'lodash-es/get';

import { ApiResponses } from '../../../../../src/app/types/api';
import { Item, ItemType, IConsentEventEmitter } from '../../../../../src/app/types/consentItem';
import { ConsentDecision } from '../../../../../src/app/types/ConsentDecision';

@Component({
  selector: 'app-consent-international-schedule-payment',
  templateUrl: './international-schedule-payment.component.html',
  styleUrls: ['./international-schedule-payment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InternationalSchedulePaymentComponent implements OnInit {
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
        value: this.response.clientName,
        cssClass: 'international-schedule-payment-merchantName'
      }
    });
    this.basicItems.push({
      type: ItemType.STRING,
      payload: {
        label: 'CONSENT.PAYMENT.ACCOUNT',
        value: this.response.account,
        cssClass: 'international-schedule-payment-account'
      }
    });
    this.basicItems.push({
      type: ItemType.STRING,
      payload: {
        label: 'CONSENT.PAYMENT.PAYMENT_REFERENCE',
        value: this.response.paymentReference,
        cssClass: 'international-schedule-payment-paymentReference'
      }
    });
    this.basicItems.push({
      type: ItemType.INSTRUCTED_AMOUNT,
      payload: {
        label: 'CONSENT.PAYMENT.AMOUNT',
        amount: this.response.instructedAmount,
        cssClass: 'international-schedule-payment-instructedAmount'
      }
    });
    this.basicItems.push({
      type: ItemType.STRING,
      payload: {
        label: 'CONSENT.PAYMENT.CURRENCY_FROM',
        value: this.response.exchangeRateInformation.unitCurrency,
        cssClass: 'international-schedule-payment-rate'
      }
    });
    this.basicItems.push({
      type: ItemType.STRING,
      payload: {
        label: 'CONSENT.PAYMENT.CURRENCY_TO',
        value: this.response.currencyOfTransfer,
        cssClass: 'international-schedule-payment-currency-of-transfer'
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
        cssClass: 'international-schedule-payment-rate'
      }
    });
    if (_get(this.response, 'paymentDate')) {
      this.basicItems.push({
        type: ItemType.DATE,
        payload: {
          label: 'CONSENT.INTERNATIONAL-SCHEDULE-PAYMENT.PAYMENT_DATE',
          date: this.response.paymentDate,
          cssClass: 'international-schedule-payment-rate'
        }
      });
    }

    if (
      _get(this.response, 'instructedAmount') &&
      this.response.exchangeRateInformation &&
      this.response.currencyOfTransfer
    ) {
      this.rateItems.push({
        type: ItemType.RATE_AMOUNT,
        payload: {
          label: 'CONSENT.PAYMENT.AMOUNT',
          amount: this.response.instructedAmount,
          rate: this.response.exchangeRateInformation,
          currencyOfTransfer: this.response.currencyOfTransfer,
          cssClass: 'international-schedule-payment-rate'
        }
      });
    }
    if (_get(this.response, 'charges.amount')) {
      this.rateItems.push({
        type: ItemType.STRING,
        payload: {
          label: 'CONSENT.PAYMENT.CHARGES',
          value: this.response.charges.amount + ' ' + this.response.charges.currency,
          cssClass: 'international-scheduled-payment-charges'
        }
      });
    } else if(_get(this.response, 'exchangeRateInformation.unitCurrency')){
      this.rateItems.push({
        type: ItemType.STRING,
        payload: {
          label: 'CONSENT.PAYMENT.CHARGES',
          value: '0.0 ' + this.response.exchangeRateInformation.unitCurrency,
          cssClass: 'international-scheduled-payment-charges'
        }
      });
    }
    if (_get(this.response, 'instructedAmount')) {
      this.rateItems.push({
        type: ItemType.INSTRUCTED_AMOUNT,
        payload: {
          label: 'CONSENT.INTERNATIONAL-PAYMENT.AMOUNT_TO_PAY',
          amount: this.response.instructedAmount,
          cssClass: 'international-schedule-payment-amount-to-pay'
        }
      });
    }
  }

  submit(allowing = false) {
    this.formSubmit.emit({
      decision: allowing ? ConsentDecision.AUTHORISED : ConsentDecision.REJECTED,
      debtorAccount: this.form.value.selectedAccount
    });
  }
}
