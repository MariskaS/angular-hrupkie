import {Component, OnInit} from '@angular/core';

import {default as DonationText} from "../constants/donationText.json";
import {default as FooterText} from "../constants/footerText.json";

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent implements OnInit {
  donationText = DonationText;

  constructor() {
  }

  ngOnInit(): void {
  }

  isSuccessfulPayment: boolean;

  successfulPaymentNotify($event: boolean) {
    this.isSuccessfulPayment = $event;
  }

  showForm($event: boolean) {
    this.isSuccessfulPayment = $event;
  }

}
