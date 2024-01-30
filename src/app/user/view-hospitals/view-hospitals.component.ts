import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-hospitals',
  templateUrl: './view-hospitals.component.html',
  styleUrls: ['./view-hospitals.component.css']
})
export class ViewHospitalsComponent {
  hospitals: any;

  private baseUrl = "http://localhost:1998/api/v1/hospital/getAllHospitals";

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.viewAllHospitals();
  }

  bookHospital(hospitalId: string) {
    localStorage.setItem('selectedHospitalId', hospitalId);
    alert("Hospital Booked Successfully! Now Redirecting to payment page...");

    const userId = localStorage.getItem('userId');
    const ambulanceId = localStorage.getItem('selectedAmbulanceId');

    if (!userId || !ambulanceId) {
      console.error('User ID or Ambulance ID not found in local storage.');
      return;
    }
    this.router.navigate(['/payment']);
    // const bookingData = {
    //   userId: userId,
    //   hospitalId: hospitalId,
    //   ambulanceId: ambulanceId
    // };
    
    // this.http.post('http://localhost:2025/api/v1/booking/book', bookingData).subscribe(() => {
    //   alert("Hospital Booked Successfully!");
    //   this.router.navigate(['/user-dash']);
    // });
    
  }

  viewAllHospitals() {
    this.http.get(this.baseUrl).subscribe(response => {
      this.hospitals = response;
    });
  }
}
