import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HighlightPipe } from '../highlight.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vacation-requests',
  standalone: true,
  imports: [HighlightPipe, FormsModule],
  templateUrl: './vacation-requests.component.html',
  styleUrl: './vacation-requests.component.css'
})
export class VacationRequestsComponent {
  faCoffee = faCoffee;
  filterText: string = '';
  vacations: any[] = [];

  constructor() {
    this.vacations = [
      {
        name: 'Ahmad Attar',
        submissionDate: '1/3/2024',
        duration: '2 Weeks (1/4/2023 - 14/4/2023)',
        salary: 2500,
        image: '../assets/images/image_1.webp',
      },
      {
        name: 'Salwa Assem',
        submissionDate: '1/3/2024',
        duration: '2 Weeks (1/4/2023 - 14/4/2023)',
        salary: 2500,
        image: '../assets/images/image_1.webp',
      },
      {
        name: 'Mohamed Nasser',
        submissionDate: '1/3/2024',
        duration: '2 Weeks (1/4/2023 - 14/4/2023)',
        salary: 2500,
        image: '../assets/images/image_1.webp',
      },
      {
        name: 'Laila Ibrahim',
        submissionDate: '1/3/2024',
        duration: '2 Weeks (1/4/2023 - 14/4/2023)',
        salary: 2500,
        image: '../assets/images/image_1.webp',
      }
    ];
  }
}
