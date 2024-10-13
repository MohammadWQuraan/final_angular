import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  faCoffee = faCoffee;
  profile: any;

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
  }
}
