import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  constructor(private router: Router) {}

  // navigateToBookHospitals() {
  //   // Navigate to the show hospital info component or page
  //   this.router.navigate(['/viewHospitals']);
  // }

  navigateToBookAmbulances() {
    // Navigate to the show hospital info component or page
    this.router.navigate(['/viewAmbulances']);
  }

  navigateToPreviousBookings() {
    // Navigate to the previous bookings component or page
    this.router.navigate(['/previousUserBookings']);
  }

  navigateToUpdateDetails() {
    // Navigate to the update details component or page
    this.router.navigate(['/updateUserDetails']);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  
}