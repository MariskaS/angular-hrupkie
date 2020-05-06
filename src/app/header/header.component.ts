import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {default as HeaderText} from "../constants/headerText.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isDonateStep: boolean = false;
  @Output() donateStep = new EventEmitter<boolean>();

  headerText = HeaderText;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDonateForm(): void {
    this.isDonateStep = !this.isDonateStep;
    this.donateStep.emit(this.isDonateStep);
  }

}
