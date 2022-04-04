import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import mock1 from './mocks/account-access-consent-details';
import mock2 from './mocks/vrp-payment-consent-details';
import mock3 from './mocks/domestic-payment-consent-details';
import { IConsentEventEmitter } from '../../types/consentItem';

@Component({
  selector: 'app-consent-dev',
  templateUrl: './consent-dev.component.html',
  styleUrls: ['./consent-dev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsentDevComponent implements OnInit {
  loading = false;
  mocks: any[] = [mock1, mock2, mock3];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  onFormSubmit(values: IConsentEventEmitter) {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.cdr.detectChanges();
    }, 3000);
  }
}
