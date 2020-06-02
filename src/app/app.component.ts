import {Component} from '@angular/core';
import {SwiperOptions} from "swiper";
import {default as SliderText} from "./constants/sliderText.json";
import {default as HeaderText} from "./constants/headerText.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  sliderText = SliderText;
  headerText = HeaderText;

  slideData = [
    {
      title: this.sliderText.slide1,
    },
    {
      title: this.sliderText.slide2,
    },
    {
      title: this.sliderText.slide3,
    },
    {
      title: this.sliderText.slide4,
    }
  ]

  config: SwiperOptions = {
    direction: 'vertical',
    pagination: {el: '.swiper-pagination', clickable: true},
    autoHeight: true,
    allowTouchMove: true,
    speed: 600,
    parallax:true,
  };
}
