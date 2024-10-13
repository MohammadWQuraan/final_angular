import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-news-slider',
  standalone: true,
  imports: [],
  templateUrl: './news-slider.component.html',
  styleUrl: './news-slider.component.css'
})
export class NewsSliderComponent {
  faCoffee = faCoffee;
  slider: any;
  constructor(){
    this.slider = {
      image1: '../assets/images/image1.jpg',
      image2: '../assets/images/image2.jpg',
      image3: '../assets/images/image3.jpg'
    };
  }
}
