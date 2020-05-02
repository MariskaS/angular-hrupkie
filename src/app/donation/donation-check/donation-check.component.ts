import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {default as DonationText} from "../../constants/donationText.json";

@Component({
  selector: 'app-donation-check',
  templateUrl: './donation-check.component.html',
  styleUrls: ['./donation-check.component.scss']
})
export class DonationCheckComponent implements OnInit {
  @Output() showForm = new EventEmitter<boolean>();

  donationText = DonationText;

  constructor() { }

  ngOnInit(): void {
  }

  showDonateForm():void {
    this.showForm.emit(false);
  }

}
