import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.scss']
})
export class DonationFormComponent implements OnInit {
  donateForm: FormGroup;

  paymentSum = [
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
      paymentSumRadio: new FormControl(null, [Validators.required]),
      paymentSumInput: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      comment: new FormControl(null),
      acceptContract: new FormControl(null, [Validators.required]),
      acceptAgreement: new FormControl(null, [Validators.required]),
    })

  }

  onSubmit() {
    this.donateForm.disable();
    console.log(this.donateForm.value);
  }


}
