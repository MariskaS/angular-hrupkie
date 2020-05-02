import { Component, OnInit } from '@angular/core';

import {default as FooterText} from "../constants/footerText.json";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerText = FooterText;

  socials = [
    {icon: 'facebook-f', link: 'https://www.facebook.com/hrupkie.fond'},
    {icon: 'vk', link: 'https://vk.com/hrupkie.fond'},
    {icon: 'twitter', link: 'http://twitter.com/share?url=http://help.hrupkie.ru/'},
    {icon: 'odnoklassniki', link: 'https://connect.ok.ru/offer?url=http://help.hrupkie.ru'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
