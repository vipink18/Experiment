import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Hospital } from '../viewnearbyhospitals/hospital';

@Component({
  selector: 'app-ambulance-dashboard',
  templateUrl: './ambulance-dashboard.component.html',
  styleUrls: ['./ambulance-dashboard.component.css']
})
export class AmbulanceDashboardComponent implements OnInit {
  nearbyHospitals: Hospital[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    //this.fetchNearbyHospitals();
  }

  fetchNearbyHospitals(): void {
    const apiUrl = 'http://localhost:2024/api/v1/ambulance/viewNearbyHospitals';

    this.http.get<Hospital[]>(apiUrl).subscribe((data: Hospital[]) => {
      this.nearbyHospitals = data;
    });
  }

  goToHospitalDetails(hospitalId: number): void {
    this.router.navigate(['/hospital', hospitalId]);
  }

  viewNearbyHospitals(){
    this.router.navigate(['/viewNearbyHospitals'])
  }

  goToPreviousBookings(): void {
    this.router.navigate(['/previousAmbulanceBookings']);
  }

  goToUpdateDetails(): void {
    this.router.navigate(['/updateAmbulanceDriverDetails']);
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
