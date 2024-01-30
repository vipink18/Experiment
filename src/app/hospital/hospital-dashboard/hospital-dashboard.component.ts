import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-dashboard',
  templateUrl: './hospital-dashboard.component.html',
  styleUrls: ['./hospital-dashboard.component.css']
})
export class HospitalDashboardComponent {
  constructor(private router: Router) {}

  navigateToPreviousBookings() {
    // Navigate to the previous bookings component or page
    this.router.navigate(['/previousHospitalBookings']);
  }

  navigateToUpdateDetails() {
    // Navigate to the update details component or page
    this.router.navigate(['/updateHospitalDetails']);
  }

  navigateToShowHospitalInfo() {
    // Navigate to the show hospital info component or page
    this.router.navigate(['/show-hospital-info']);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}