import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-previous-user-bookings',
  templateUrl: './previous-user-bookings.component.html',
  styleUrls: ['./previous-user-bookings.component.css']
})
export class PreviousUserBookingsComponent {
  bookings: any[] = [];
  userId: string | null = localStorage.getItem('userId'); // Retrieve userId from localStorage

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (this.userId) {
      const apiUrl = `http://localhost:2029/api/v1/user/userBookingHistory/${this.userId}`;
      this.http.get<any[]>(apiUrl).subscribe((history: any[]) => {
        this.bookings = history;
      });
    } else {
      // Handle the case where userId is not found in localStorage
      console.error('User ID not found in localStorage');
    }
  }
}
