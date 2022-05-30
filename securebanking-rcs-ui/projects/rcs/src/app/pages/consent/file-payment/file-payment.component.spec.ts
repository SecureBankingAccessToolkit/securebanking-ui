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

import { FilePaymentComponent } from './file-payment.component';
import {ConsentDecision} from "../../../types/ConsentDecision";

describe('app:bank FilePaymentComponent', () => {
  let component: FilePaymentComponent;
  let fixture: ComponentFixture<FilePaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FilePaymentComponent, PermissionsComponent],
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
    fixture = TestBed.createComponent(FilePaymentComponent);
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
   "accountId":"a25606e1-00cc-4225-b662-f339229e3d59",
   "currency":"GBP",
   "nickname":"UK Bills",
   "accounts":[
      {
         "schemeName":"UK.OBIE.SortCodeAccountNumber",
         "identification":"4938761144202",
         "name":"c417136f-91e4-4abe-985e-f757496e5458",
         "secondaryIdentification":"17508172"
      }
   ]
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
   "accountId":"a25606e1-00cc-4225-b662-f339229e3d59",
   "currency":"GBP",
   "nickname":"UK Bills",
   "accounts":[
      {
         "schemeName":"UK.OBIE.SortCodeAccountNumber",
         "identification":"4938761144202",
         "name":"c417136f-91e4-4abe-985e-f757496e5458",
         "secondaryIdentification":"17508172"
      }
   ]
};;
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
