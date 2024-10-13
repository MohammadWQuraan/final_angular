import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HighlightPipe } from '../highlight.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vacation',
  standalone: true,
  imports: [HighlightPipe, FormsModule],
  templateUrl: './vacation.component.html',
  styleUrl: './vacation.component.css'
})
export class VacationComponent {
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
      },
      {
        name: 'Mohamed Nasser',
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
        name: 'Mohamed Nasser',
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
        name: 'Mohamed Nasser',
        submissionDate: '1/3/2024',
        duration: '2 Weeks (1/4/2023 - 14/4/2023)',
        salary: 2500,
        image: '../assets/images/image_1.webp',
      },
    ];
  }
  toggleSelectAll(event: any) {
    const isChecked = event.target.checked;
    this.vacations.forEach(vacation => vacation.selected = isChecked);
  }
}
