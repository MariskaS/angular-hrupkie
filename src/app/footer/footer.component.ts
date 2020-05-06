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
    {icon: 'facebook', link: 'https://www.facebook.com/hrupkie.fond'},
    {icon: 'vk', link: 'https://vk.com/hrupkie.fond'},
    {icon: 'instagram', link: 'http://instagram.com/hrupkie.fond/'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
