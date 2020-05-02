import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {default as FormText} from "../../constants/formText.json";

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.scss']
})
export class DonationFormComponent implements OnInit {
  @Output() successfulPayment = new EventEmitter<boolean>();
  isSuccessfulPayment: boolean = false;
  donateForm: FormGroup;
  formText = FormText;

  donateSum = [
    {value: 50},
    {value: 100},
    {value: 300},
    {value: 500},
    {value: 1000},
  ];

  constructor() {
  }

  ngOnInit(): void {
    this.donateForm = new FormGroup({
      sumRadioValue: new FormControl(this.donateSum[0].value, []),
      sumInputValue: new FormControl(null, []),
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      comment: new FormControl(null),
      acceptContract: new FormControl(null, [Validators.required]),
      acceptAgreement: new FormControl(null, [Validators.required]),
    })

    this.resetRadioSumValue();
  }

  /**
   * If checked radio value, reset input value.
   */
  resetInputSumValue(): void {
    this.donateForm.get('sumInputValue').reset(null);
  }

  /**
   * If checked input value, reset radio value.
   */
  resetRadioSumValue(): void {
    this.donateForm.get('sumInputValue').valueChanges
      .subscribe(value => {
        if (parseInt(value) >= 0 && this.donateForm.get('sumRadioValue').value) {
           this.donateForm.get('sumRadioValue').reset(null);
        }
      });
  }

  onSubmit(): void {
    this.donateForm.disable();
    this.sendDonation(this.donateForm.value);
  }

  /**
   * Send data to the cloudPayments.
   * @param formData: any, formGroup data.
   */
  sendDonation(formData): void {
    const widget = new (window as any).cp.CloudPayments();

    // Donor data.
    const data = {
      name: formData.name
    } as any;

    const auto = false;

    // Unable subscription.
    if (auto) {
      data.cloudPayments = {
        // Once a month starting from the next month.
        recurrent: {interval: 'Month', period: 1}
      }
    }

    const amount = formData.sumInputValue || formData.sumRadioValue;
    const accountId = formData.email;

    widget.charge({

        // Id from your personal account
        publicId: 'test_api_00000000000000000000002',
        description: formData.comment,
        amount: amount,
        currency: 'RUB',

        // Payer ID (required to create a subscription).
        accountId: accountId,
        email: accountId,
        data: data
      },
       (options) => {
        // Success - successful payment action.
        this.successfulPayment.emit(true);
        console.log(options)
      },
      (reason, options) => {
        // Fail - action on unsuccessful payment.
        console.error(reason, options)
      });
  }


}
