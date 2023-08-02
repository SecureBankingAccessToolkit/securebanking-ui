import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import _get from 'lodash-es/get';

import {ApiResponses} from '../../../../../src/app/types/api';
import {IConsentEventEmitter, Item, ItemType} from '../../../../../src/app/types/consentItem';
import {ConsentDecision} from '../../../../../src/app/types/ConsentDecision';

@Component({
    selector: 'app-consent-funds-confirmation',
    templateUrl: './funds-confirmation.component.html',
    styleUrls: ['./funds-confirmation.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FundsConfirmationComponent implements OnInit {
    constructor() {
    }

    form: FormGroup = new FormGroup({});

    items: Item[] = [];
    @Input() response: ApiResponses.ConsentDetailsResponse;
    _loading = false;
    @Input() set loading(isLoading: boolean) {
        this.form[isLoading ? 'disable' : 'enable']();
        this._loading = isLoading;
    }

    @Output() formSubmit = new EventEmitter<IConsentEventEmitter>();

    ngOnInit() {
        if (!this.response) {
            return;
        }
        //  console.log(`${JSON.stringify(this.response)}`)
        if (_get(this.response, 'debtorAccount')) {
            if (_get(this.response, 'debtorAccount.name')) {
                this.items.push({
                    type: ItemType.STRING,
                    payload: {
                        label: 'CONSENT.FUNDS-CONFIRMATION.ACCOUNT_NAME',
                        value: this.response.debtorAccount.name,
                        cssClass: 'cof-account-title'
                    }
                });
            }

            if (_get(this.response, 'debtorAccount.identification')) {
                this.items.push({
                    type: ItemType.VRP_ACCOUNT_NUMBER,
                    payload: {
                        sortCodeLabel: 'CONSENT.FUNDS-CONFIRMATION.ACCOUNT_SORT_CODE',
                        accountNumberLabel: 'CONSENT.FUNDS-CONFIRMATION.ACCOUNT_NUMBER',
                        account: this.response.debtorAccount,
                        cssClass: 'cof-account-id'
                    }
                });
            }
        }

        if (this.response.expirationDateTime) {
            this.items.push({
                type: ItemType.DATE,
                payload: {
                    label: 'CONSENT.FUNDS-CONFIRMATION.EXPIRATION',
                    date: this.response.expirationDateTime,
                    cssClass: 'cof-expiration'
                }
            });
        }
    }

    submit(allowing = false) {
        const debtorAccountValue = allowing ? _get(this.response, 'debtorAccount') : null
        this.formSubmit.emit({
            decision: allowing ? ConsentDecision.AUTHORISED : ConsentDecision.REJECTED,
            debtorAccount: debtorAccountValue
        });
    }
}
