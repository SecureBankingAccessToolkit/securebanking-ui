import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {ApiResponses} from "../../../../../../src/app/types/api";
import {FormGroup} from "@angular/forms";
import {ForgerockMessagesService} from "@securebanking/securebanking-common-ui/services/forgerock-messages";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.component.html',
  styleUrls: ['./cancel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CancelComponent implements OnInit, AfterViewChecked {
  error: Error;
  form: FormGroup = new FormGroup({});
  @ViewChild('cancelFormPost') cancelFormPost: ElementRef;
  @Input() response: ApiResponses.ConsentDetailsResponse;
  _loading = false;
  @Input() set loading(isLoading: boolean) {
    this.form[isLoading ? 'disable' : 'enable']();
    this._loading = isLoading;
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private messages: ForgerockMessagesService,
    private translate: TranslateService,
  ) {
  }

  @Output() formSubmit = new EventEmitter<String>()

  ngOnInit() {
    console.log("cancel component")
    console.table(this.response.userActions.canceledByUser)
    if (this.response.userActions.canceledByUser === false) {
      this.displayError("Error canceling the consent")
    }else{
      const intentType = this.translate.instant('COMPONENT.CANCEL.CONSENTS.' + this.response.intentType)
      const message = `?Error=consent_required&error_description=Consent ${intentType} rejected by user ${this.response.username}`
      this.response.userActions.cancelRedirectUri = this.response.userActions.cancelRedirectUri + message;
    }
  }

  ngAfterViewChecked(): void {
    console.log("submit cancel form")
    this.cancelFormPost.nativeElement.submit();
  }

  displayError(er: string) {
    this.messages.error(er);
    this.error = new Error(er);
    this.loading = false;
    this.cdr.detectChanges();
  }

}
