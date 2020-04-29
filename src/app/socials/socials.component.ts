import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss']
})
export class SocialsComponent implements OnInit {
  isOpen: boolean = false;
  mainBtnIcon: string = 'share-alt';
  socials = [
    {icon: 'facebook-f', link: 'https://www.facebook.com/hrupkie.fond'},
    {icon: 'vk', link: 'https://vk.com/hrupkie.fond'},
    {icon: 'twitter', link: 'http://twitter.com/share?url=http://help.hrupkie.ru/'},
    {icon: 'odnoklassniki', link: 'https://connect.ok.ru/offer?url=http://help.hrupkie.ru'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  showSocials(): void {
    this.isOpen = !this.isOpen;
    this.isOpen ? this.mainBtnIcon = 'times' : this.mainBtnIcon = 'share-alt'
  }

}
