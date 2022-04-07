import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import rootReducer from '../../../../../src/store';
import { MatSharedModule } from '../../../../../src/app/mat-shared.module';
import { TranslateSharedModule } from '../../../../../src/app/translate-shared.module';
import { ForgerockSharedModule } from '@securebanking/securebanking-common-ui/shared';
import { ForgerockCustomerLogoModule } from '@securebanking/securebanking-common-ui/components/forgerock-customer-logo';
import { PermissionsComponent } from '../permissions/permissions.component';
import { ConsentBoxComponentModule } from '../components/consent-box/consent-box.module';
import { SubmitBoxComponentModule } from '../components/submit-box/submit-box.module';
import { AccountCheckboxModule } from '../components/account-checkbox/account-checkbox.module';
import { AccountSelectionComponentModule } from '../components/account-selection/account-selection.module';

import { InternationalSchedulePaymentComponent } from './international-schedule-payment.component';
import {ConsentDecision} from "../../../types/ConsentDecision";

describe('app:bank InternationalSchedulePaymentComponent', () => {
  let component: InternationalSchedulePaymentComponent;
  let fixture: ComponentFixture<InternationalSchedulePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InternationalSchedulePaymentComponent, PermissionsComponent],
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
        AccountCheckboxModule,
        AccountSelectionComponentModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalSchedulePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit formSubmit decision deny by default', () => {
    spyOn(component.formSubmit, 'emit');

    component.submit();
    fixture.detectChanges();

    expect(component.formSubmit.emit).toHaveBeenCalledWith({
      decision: ConsentDecision.REJECTED,
      debtorAccount: ''
    });
  });

  it('should emit formSubmit decision deny', () => {
    const debtorAccount = {
      schemeName: "UK.OBIE.SortCodeAccountNumber",
      identification: "79126738233670",
      name: "7b78b560-6057-41c5-bf1f-1ed590b1c30b",
      secondaryIdentification: "49704112"
    };
    spyOn(component.formSubmit, 'emit');
    component.form.controls['selectedAccount'].setValue(debtorAccount);

    component.submit(false);
    fixture.detectChanges();

    expect(component.formSubmit.emit).toHaveBeenCalledWith({
      decision: ConsentDecision.REJECTED,
      debtorAccount: debtorAccount
    });
  });

  it('should emit formSubmit decision allow', () => {
    const debtorAccount = {
      schemeName: "UK.OBIE.SortCodeAccountNumber",
      identification: "79126738233670",
      name: "7b78b560-6057-41c5-bf1f-1ed590b1c30b",
      secondaryIdentification: "49704112"
    };
    spyOn(component.formSubmit, 'emit');
    component.form.controls['selectedAccount'].setValue(debtorAccount);

    component.submit(true);
    fixture.detectChanges();

    expect(component.formSubmit.emit).toHaveBeenCalledWith({
      decision: ConsentDecision.AUTHORISED,
      debtorAccount: debtorAccount
    });
  });
});
