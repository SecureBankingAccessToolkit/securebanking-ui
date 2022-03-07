import {Component, OnInit} from '@angular/core';
import {OBCashAccount3} from "rcs/src/app/types/ob";

@Component({
  selector: 'app-vrp-account-item',
  templateUrl: './vrp-account-item.component.html'
})
export class VrpAccountItemComponent implements OnInit {
  account: OBCashAccount3;
  cssClass: string;
  sortCodeLabel: string;
  accountNumberLabel: string;
  payload: any;

  constructor() {
  }

  ngOnInit() {
  }
}
