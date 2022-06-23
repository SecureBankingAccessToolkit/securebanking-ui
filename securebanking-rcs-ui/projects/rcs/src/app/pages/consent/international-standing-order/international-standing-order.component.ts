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
      _get(this.response, 'standingOrder.firstPaymentDateTime') &&
      _get(this.response, 'standingOrder.firstPaymentAmount')
    ) {
      this.items.push({
        type: ItemType.FIRST_PAYMENT,
        payload: {
          firstPaymentLabel: 'CONSENT.DOMESTIC-STANDING-ORDER.FIRST_PAYMENT',
          firstPaymentDateLabel: 'CONSENT.DOMESTIC-STANDING-ORDER.FIRST_PAYMENT_DATE',
          firstPaymentAmountLabel: 'CONSENT.DOMESTIC-STANDING-ORDER.FIRST_PAYMENT_AMOUNT',
          firstPaymentDate: this.response.standingOrder.firstPaymentDateTime,
          firstPaymentAmount: this.response.standingOrder.firstPaymentAmount,
          cssClass: 'file-payment-FirstPayment'
        }
      });
    }
    if (_get(this.response, 'standingOrder.recurringPaymentAmount') && _get(this.response, 'standingOrder.frequency')) {
      this.items.push({
        type: ItemType.RECURRING_PAYMENT,
        payload: {
          nextPaymentLabel: 'CONSENT.DOMESTIC-STANDING-ORDER.RECURRING_PAYMENT',
          nextPaymentAmountLabel: 'CONSENT.DOMESTIC-STANDING-ORDER.RECURRING_PAYMENT_AMOUNT',
          frequencyLabel: 'CONSENT.DOMESTIC-STANDING-ORDER.FREQ',
          nextPaymentAmount: this.response.standingOrder.recurringPaymentAmount,
          frequency: this.response.standingOrder.frequency,
          cssClass: 'file-payment-NextPayment'
        }
      });
    }
    if (
      _get(this.response, 'standingOrder.finalPaymentDateTime') &&
      _get(this.response, 'standingOrder.finalPaymentAmount')
    ) {
      this.items.push({
        type: ItemType.FINAL_PAYMENT,
        payload: {
          finalPaymentLabel: 'CONSENT.DOMESTIC-STANDING-ORDER.FINAL_PAYMENT',
          finalPaymentDateLabel: 'CONSENT.DOMESTIC-STANDING-ORDER.FINAL_PAYMENT_AMOUNT',
          finalPaymentAmountLabel: 'CONSENT.DOMESTIC-STANDING-ORDER.FINAL_PAYMENT_DATE',
          finalPaymentDate: this.response.standingOrder.finalPaymentDateTime,
          finalPaymentAmount: this.response.standingOrder.finalPaymentAmount,
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
