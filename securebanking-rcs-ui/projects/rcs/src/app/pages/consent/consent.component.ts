import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import _get from 'lodash-es/get';
import { ApiService } from '../../../../src/app/services/api.service';
import { ApiResponses } from '../../../../src/app/types/api';
import { ForgerockMessagesService } from '@securebanking/securebanking-common-ui/services/forgerock-messages';
import { IConsentEventEmitter } from '../../types/consentItem';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsentComponent implements OnInit {
  loading: boolean;
  error: Error;
  response: ApiResponses.ConsentDetailsResponse;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private cdr: ChangeDetectorRef,
    private messages: ForgerockMessagesService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        console.log((params))
      }
    )

    const consentRequest = this.route.snapshot.queryParamMap.get('consent_request');

    if (!consentRequest) {
      this.error = new Error('Missing consent request');
      this.cdr.detectChanges();
      return;
    }

    this.api
      .getConsentDetails(consentRequest)
      .pipe(withErrorHandlingForRCSBadRequest)
      .subscribe(
        (data: ApiResponses.ConsentDetailsResponse) => {
          if (data.redirectUri != null) {
            window.location.href = data.redirectUri;
          } else {
            this.response = data;
            this.cdr.detectChanges();
          }
        },
        (er: any) => {
          console.log(er);
          if (er.redirectUri != null) {
            window.location.href = er.redirectUri;
          } else {
            this.displayError(er);
          }
        }
      );
  }

  displayError(er: string) {
    this.messages.error(er);
    this.error = new Error(er);
    this.loading = false;
    this.cdr.detectChanges();
  }

  onFormSubmit(values: IConsentEventEmitter) {
    const { consent_request: consentJwt } = this.route.snapshot.queryParams;
    const requestBody = {
      consentJwt,
      ...values
    };

    if (!this.response || !this.response.decisionAPIUri) return;
    this.loading = true;

    this.api
      .postConsentDecision(this.response.decisionAPIUri, requestBody)
      .pipe(withErrorHandling)
      .subscribe(
        (data: any) => {
          window.location.href = data.redirectUri;
        },
        (er: any) => {
          this.displayError(er);
        }
      );
  }
}

function withErrorHandling(obs: Observable<any>) {
  return obs.pipe(
    retry(2),
    catchError((er: HttpErrorResponse) => {
      const apiError = _get(er, 'error.Message');
      const anyError = _get(er, 'error.message', 'Something wrong happened');
      return throwError(apiError || anyError);
    })
  );
}

function withErrorHandlingForRCSBadRequest(obs: Observable<any>) {
  return obs.pipe(
    catchError((er: HttpErrorResponse) => {
      const apiError = _get(er, 'error.Message');
      const anyError = _get(er, 'error.message', 'Unable to proceed with consent approval');
      const redirectUri = _get(er, 'error.redirectUri');
      if (redirectUri) {
        window.location.href = redirectUri;
      }
      /*
      if(er.error.Errors && er.error.Errors.length > 0){
        console.log(er.error.Errors.length >0)
      }
      Bad Request: Undefined error yet. Generic error message: Error verifying the consent request JWT. Expired JWT
      */
      const specificError = _get(er, 'error.Errors[0].Message', 'Undefined')
      return throwError(apiError + ": " + specificError || anyError + ": " + specificError);
    })
  );
}
