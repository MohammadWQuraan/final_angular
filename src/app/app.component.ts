
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // This is already in your routing module
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { NewsSliderComponent } from './news-slider/news-slider.component';
import { VacationRequestsComponent } from './vacation-requests/vacation-requests.component';
import { ProfileComponent } from './profile/profile.component';
import { VacationComponent } from "./vacation/vacation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule, NavbarComponent, ProfileCardComponent, NewsSliderComponent, VacationRequestsComponent, ProfileComponent,
    VacationComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
