import {Component, EventEmitter, Output} from '@angular/core';

import {default as DonationText} from "../../constants/donationText.json";

@Component({
  selector: 'app-donation-check',
  templateUrl: './donation-check.component.html',
  styleUrls: ['./donation-check.component.scss']
})
export class DonationCheckComponent {
  @Output() showForm = new EventEmitter<boolean>();

  donationText = DonationText;

  showDonateForm():void {
    this.showForm.emit(false);
  }

}
