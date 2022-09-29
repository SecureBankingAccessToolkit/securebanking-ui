import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import _get from 'lodash-es/get';

import { ApiResponses } from '../../../../../src/app/types/api';
import { Item, ItemType, IConsentEventEmitter } from '../../../../../src/app/types/consentItem';
import { ConsentDecision } from '../../../../../src/app/types/ConsentDecision';

@Component({
  selector: 'app-consent-international-standing-order-payment',
  templateUrl: './international-standing-order.component.html',
  styleUrls: ['./international-standing-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InternationalStandingOrderComponent implements OnInit {
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
  items: Item[] = [];

  ngOnInit() {
    if (!this.response) {
      return;
    }

    this.items.push({
      type: ItemType.STRING,
      payload: {
        label: 'CONSENT.PAYMENT.PAYEE_NAME',
        value: this.response.merchantName,
        cssClass: 'file-payment-merchantName'
      }
    });
    this.items.push({
      type: ItemType.STRING,
      payload: {
        label: 'CONSENT.PAYMENT.ACCOUNT',
        value: this.response.account,
        cssClass: 'file-payment-account'
      }
    });
    this.items.push({
      type: ItemType.STRING,
      payload: {
        label: 'CONSENT.PAYMENT.PAYMENT_REFERENCE',
        value: this.response.paymentReference,
        cssClass: 'file-payment-paymentReference'
      }
    });

    if (
      _get(this.response, 'internationalStandingOrder.firstPaymentDateTime') &&
      _get(this.response, 'internationalStandingOrder.instructedAmount')
    ) {
      this.items.push({
        type: ItemType.FIRST_PAYMENT,
        payload: {
          firstPaymentLabel: 'CONSENT.INTERNATIONAL-STANDING-ORDER.FIRST_PAYMENT',
          firstPaymentDateLabel: 'CONSENT.INTERNATIONAL-STANDING-ORDER.DATE',
          firstPaymentAmountLabel: 'CONSENT.INTERNATIONAL-STANDING-ORDER.AMOUNT',
          firstPaymentDate: this.response.internationalStandingOrder.firstPaymentDateTime,
          firstPaymentAmount: this.response.internationalStandingOrder.instructedAmount,
          cssClass: 'file-payment-FirstPayment'
        }
      });
    }
    if (_get(this.response, 'internationalStandingOrder.instructedAmount') &&
        _get(this.response, 'internationalStandingOrder.frequency')) {
      this.items.push({
        type: ItemType.RECURRING_PAYMENT,
        payload: {
          nextPaymentLabel: 'CONSENT.INTERNATIONAL-STANDING-ORDER.RECURRING_PAYMENT',
          nextPaymentAmountLabel: 'CONSENT.INTERNATIONAL-STANDING-ORDER.AMOUNT',
          frequencyLabel: 'CONSENT.INTERNATIONAL-STANDING-ORDER.FREQ',
          nextPaymentAmount: this.response.internationalStandingOrder.instructedAmount,
          frequency: this.response.internationalStandingOrder.frequency,
          cssClass: 'file-payment-NextPayment'
        }
      });
    }
    if (
      _get(this.response, 'internationalStandingOrder.finalPaymentDateTime') &&
      _get(this.response, 'internationalStandingOrder.instructedAmount')
    ) {
      this.items.push({
        type: ItemType.FINAL_PAYMENT,
        payload: {
          finalPaymentLabel: 'CONSENT.INTERNATIONAL-STANDING-ORDER.FINAL_PAYMENT',
          finalPaymentDateLabel: 'CONSENT.INTERNATIONAL-STANDING-ORDER.DATE',
          finalPaymentAmountLabel: 'CONSENT.INTERNATIONAL-STANDING-ORDER.AMOUNT',
          finalPaymentDate: this.response.internationalStandingOrder.finalPaymentDateTime,
          finalPaymentAmount: this.response.internationalStandingOrder.instructedAmount,
          cssClass: 'file-payment-FinalPayment'
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
