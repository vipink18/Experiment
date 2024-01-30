import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  userDetails: any = {};
  userId: string | null = localStorage.getItem('userId');
  ambulanceType: string | null = localStorage.getItem('ambulanceType'); // Retrieve ambulanceType from local storage
  amount: number = 0;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    if (this.userId && this.ambulanceType) {
      this.getUserDetails(this.userId);
      this.generateAmount(this.ambulanceType);
    }
  }

  getUserDetails(userId: string): void {
    const apiUrl = `http://localhost:2029/api/v1/user/getUserById/${userId}`;
    this.http.get(apiUrl).subscribe(
      (data: any) => {
        this.userDetails = data;
      },
      (error) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  generateAmount(ambulanceType: string): void {
    let min: number, max: number;
    if (ambulanceType === 'General') {
      min = 800;
      max = 1000;
    } else if (ambulanceType === 'Cardiac') {
      min = 1500;
      max = 2000;
    } else if (ambulanceType === 'Express') {
      min = 2500;
      max = 3000;
    } else if (ambulanceType === 'Life_Support') {
      min = 3500;
      max = 4000;
    } else {
      // Default values if ambulanceType is not recognized
      min = 500;
      max = 1000;
    }

    // Generate a random amount within the specified range
    this.amount = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  makePayment(): void {
    const hospitalId = localStorage.getItem('selectedHospitalId');
    const ambulanceId = localStorage.getItem('selectedAmbulanceId');

    if (this.userId && hospitalId && ambulanceId) {
      const bookingData = {
        userId: this.userId,
        hospitalId: hospitalId,
        ambulanceId: ambulanceId
      };

      const bookingApiUrl = 'http://localhost:2025/api/v1/booking/book';
      this.http.post(bookingApiUrl, bookingData).subscribe(
        () => {
          alert('Hospital Booked Successfully!');
          this.router.navigate(['/user-dash']);
        },
        (error) => {
          console.error('Error making payment:', error);
        }
      );
    }
  }
}
