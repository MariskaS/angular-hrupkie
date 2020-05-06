import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isDonateStep: boolean;

  toggleDonateForm($event: boolean) {
    this.isDonateStep = $event;
  }
}
