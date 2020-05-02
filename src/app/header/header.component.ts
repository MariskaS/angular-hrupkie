import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {default as HeaderText} from "../constants/headerText.json";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() donateStep = new EventEmitter<boolean>();
  isDonateStep: boolean = false;

  headerText = HeaderText;

  constructor() { }

  ngOnInit(): void {
  }

  showDonate(): void {
    this.isDonateStep = !this.isDonateStep;
    this.donateStep.emit(this.isDonateStep);
  }

}
