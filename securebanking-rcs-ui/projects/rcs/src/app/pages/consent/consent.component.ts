import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {catchError, retry} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import _get from 'lodash-es/get';
import {ApiService} from '../../../../src/app/services/api.service';
import {ApiResponses} from '../../../../src/app/types/api';
import {ForgerockMessagesService} from '@securebanking/securebanking-common-ui/services/forgerock-messages';
import {IConsentEventEmitter} from '../../types/consentItem';
import jwtDecode from "jwt-decode";
import {ConsentDecision} from "bank/src/app/types/ConsentDecision";

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
  ) {
  }

  ngOnInit() {
    let redirect_uri: string;
    this.route.fragment.subscribe((segments: string) => {
      console.log(`fragments: ${segments}`);
    })
    this.route.queryParams.subscribe(
      params => {
        console.log((params))
      }
    )

    const consentRequest = this.route.snapshot.queryParamMap.get('consent_request');
    const consentApprovalRedirectUri = jwtDecode(consentRequest)["consentApprovalRedirectUri"];
    const m = consentApprovalRedirectUri.match("redirect_uri=([^&]+).*$");
    if (m.length > 0) {
      redirect_uri = m[1];
      console.log("redirect_uri = " + redirect_uri);
    }

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
            if (redirect_uri) {
              this.updateUserActions(false, false, false, redirect_uri);
            }
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
    console.log("end consent component")
  }

  displayError(er: string) {
    this.messages.error(er);
    this.error = new Error(er);
    this.loading = false;
    this.cdr.detectChanges();
  }

  onFormSubmit(values: IConsentEventEmitter) {
    const {consent_request: consentJwt} = this.route.snapshot.queryParams;
    console.log("onsubmmit from submit-box");
    console.log("response" + this.response.intentType);
    console.log("response" + this.response.decisionApiUri);
    const requestBody = {
      consentJwt,
      ...values
    };

    if (!this.response || !this.response.decisionApiUri) {
      return;
    }
    this.loading = true;
    if (requestBody.decision === ConsentDecision.DENY) {
      // console.log(`User cancels intentType: ${this.response.intentType}`)
      // updateUserActions(false, false, true);
      this.loading = true;
      console.log(`User rejects intentType: ${this.response.intentType}`)
      this.updateUserActions(false, true);
    } else {
      this.loading = true;
      console.log(`User accepts intentType: ${this.response.intentType}`)
      this.updateUserActions(true);
    }
    this.api
      .postConsentDecision(this.response.decisionApiUri, requestBody)
      .pipe(withErrorHandling)
      .subscribe(
        (data: ApiResponses.ConsentDecisionResponse) => {
          console.table(data);
          if (data.consentJwt && data.redirectUri) {
            this.response.decisionResponse = data;
            this.cdr.detectChanges();
            this.loading = false;
          } else if (data.redirectUri) {
            window.location.href = data.redirectUri;
          }
        },
        (er: any) => {
          this.displayError(er);
        }
      );

  }

  updateUserActions(accept: boolean = false, reject: boolean = false, cancel: boolean = false, redirectUri: string = null){
    if(!this.response.userActions){
      this.response.userActions = {};
    }
    this.response.userActions.acceptedByUser = accept;
    this.response.userActions.rejectedByUser = reject;
    this.response.userActions.canceledByUser = cancel;
    this.response.userActions.cancelRedirectUri = redirectUri;
  }
}

function updateUserActions(accept: boolean = false, reject: boolean = false, cancel: boolean = false, redirectUri: string = null){
  this.response.userActions.acceptedByUser = accept;
  this.response.userActions.rejectedByUser = reject;
  this.response.userActions.canceledByUser = cancel;
  this.response.userActions.cancelRedirectUri = redirectUri;
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
      const specificError = _get(er, 'error.Errors[0].Message', 'Undefined')
      return throwError(apiError + ": " + specificError || anyError + ": " + specificError);
    })
  );
}
