// import { HttpClient } from '@angular/common/http';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-previous-ambulance-bookings',
//   templateUrl: './previous-ambulance-bookings.component.html',
//   styleUrls: ['./previous-ambulance-bookings.component.css']
// })
// export class PreviousAmbulanceBookingsComponent {
//   bookingHistory: any[] = [];
//   ambulanceId: string | null = localStorage.getItem('ambulanceId'); // Retrieve userId from localStorage

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     if (this.ambulanceId) {
//       const apiUrl = `http://localhost:2029/api/v1/ambulance/ambulanceBookingHistory/${this.ambulanceId}`;
//       this.http.get<any[]>(apiUrl).subscribe((history: any[]) => {
//         this.bookingHistory = history;
//       });
//     } else {
//       // Handle the case where userId is not found in localStorage
//       console.error('Ambulance Id not found in localStorage!');
//     }
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-previous-ambulance-bookings',
  templateUrl: './previous-ambulance-bookings.component.html',
  styleUrls: ['./previous-ambulance-bookings.component.css']
})
export class PreviousAmbulanceBookingsComponent {
  bookings: any[] = [];
  ambulanceId: string | null = localStorage.getItem('ambulanceId'); // Retrieve ambulanceId from localStorage

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (this.ambulanceId) {
      const apiUrl = `http://localhost:2029/api/v1/ambulance/ambulanceBookingHistory/${this.ambulanceId}`;
      this.http.get<any[]>(apiUrl).subscribe((bookings: any[]) => {
        this.bookings = bookings;
      });
    } else {
      // Handle the case where ambulanceId is not found in localStorage
      console.error('Ambulance ID not found in localStorage');
    }
  }
}
