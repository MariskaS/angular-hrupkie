import {Component} from '@angular/core';

import {default as DonationText} from "../constants/donationText.json";

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent {
  donationText = DonationText;

  isSuccessfulPayment: boolean;

  successfulPaymentNotify($event: boolean) {
    this.isSuccessfulPayment = $event;
  }

  showForm($event: boolean) {
    this.isSuccessfulPayment = $event;
  }

}
