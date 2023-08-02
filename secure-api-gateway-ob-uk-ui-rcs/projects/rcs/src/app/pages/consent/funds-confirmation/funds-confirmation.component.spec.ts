import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {TranslateModule} from '@ngx-translate/core';

import rootReducer from '../../../../../src/store';
import {MatSharedModule} from '../../../../../src/app/mat-shared.module';
import {TranslateSharedModule} from '../../../../../src/app/translate-shared.module';
import {ForgerockSharedModule} from '@secureapigateway/secure-api-gateway-ob-uk-ui-common/shared';
import {
    ForgerockCustomerLogoModule
} from '@secureapigateway/secure-api-gateway-ob-uk-ui-common/components/forgerock-customer-logo';
import {PermissionsComponent} from '../permissions/permissions.component';
import {ConsentBoxComponentModule} from '../components/consent-box/consent-box.module';
import {SubmitBoxComponentModule} from '../components/submit-box/submit-box.module';
import {AccountCheckboxModule} from '../components/account-checkbox/account-checkbox.module';

import {FundsConfirmationComponent} from './funds-confirmation.component';
import {ConsentDecision} from "../../../types/ConsentDecision";

describe('app:bank FundsConfirmationComponent', () => {
    let component: FundsConfirmationComponent;
    let fixture: ComponentFixture<FundsConfirmationComponent>;
    const debtorAccountObject = {
        schemeName: "UK.OBIE.SortCodeAccountNumber",
        identification: "30772183765717",
        name: "7b78b560-6057-41c5-bf1f-1ed590b1c30b",
        secondaryIdentification: "66234289"
    }
    const responseObject = {
        debtorAccount:
            {
                schemeName: "UK.OBIE.SortCodeAccountNumber",
                identification: "30772183765717",
                name: "7b78b560-6057-41c5-bf1f-1ed590b1c30b",
                secondaryIdentification: "66234289"
            }
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FundsConfirmationComponent, PermissionsComponent],
            imports: [
                CommonModule,
                MatSharedModule,
                TranslateSharedModule,
                ForgerockCustomerLogoModule,
                ForgerockSharedModule,
                StoreModule.forRoot(rootReducer),
                TranslateModule.forRoot(),
                SubmitBoxComponentModule,
                ConsentBoxComponentModule,
                AccountCheckboxModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FundsConfirmationComponent);
        component = fixture.componentInstance;

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit formSubmit decision deny by default', () => {
        spyOn(component.formSubmit, 'emit');

        component.submit();


        expect(component.formSubmit.emit).toHaveBeenCalledWith({
            decision: ConsentDecision.REJECTED,
            debtorAccount: null
        });
    });

    it('should emit formSubmit decision deny', () => {

        spyOn(component.formSubmit, 'emit');
        // @ts-ignore
        component.response = responseObject

        component.submit(false);


        expect(component.formSubmit.emit).toHaveBeenCalledWith({
            decision: ConsentDecision.REJECTED,
            debtorAccount: null
        });
    });

    it('should emit formSubmit decision allow', () => {

        spyOn(component.formSubmit, 'emit');
        // @ts-ignore
        component.response = responseObject

        component.submit(true);


        expect(component.formSubmit.emit).toHaveBeenCalledWith({
            decision: ConsentDecision.AUTHORISED,
            debtorAccount: debtorAccountObject
        });
    });
});
