import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  faCoffee = faCoffee;
  profile: any;
  requests: any;

  constructor() {
    this.profile = {
      name: 'Ahmad Azmi',
      major: 'Junior Accounting Officer',
      image: '../assets/images/image_1.webp',
      reporting: 'Salma Assem',
      level: 'Level 10',
      lifetime: '2.5 Years',
      vacationleft: '10 days',
      sickleft: '14 days'
    };
    this.requests = {
      name: 'Annual Vacation',
      days: '2/3/2023 - 10/3/2023 (8 days)',
      image: '../assets/images/image_1.webp',
      approved: 'Hazem Azmi'
    },
    {
      name: 'Sick Vacation',
      days: '2/3/2023 - 10/3/2023 (8 days)',
      image: '../assets/images/image_1.webp',
      approved: 'Hazem Azmi'
    },
    {
      name: 'Annual Vacation',
      days: '2/3/2023 - 10/3/2023 (8 days)',
      image: '../assets/images/image_1.webp',
      approved: 'Hazem Azmi'
    },
    {
      name: 'Non-paid Vacation',
      days: '2/3/2023 - 10/3/2023 (8 days)',
      image: '../assets/images/image_1.webp',
      approved: 'Hazem Azmi'
    };
  }
}
