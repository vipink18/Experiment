// import { Component, OnInit } from '@angular/core';
// import { HospitalBookingDetails } from '../model/HospitalBookingDetails';
// import { HttpClient } from '@angular/common/http';

// // interface HospitalDetails {
// //   user: {
// //     userName: string;
// //     userContactNumber: string;
// //     userEmailId: string;
// //     userLocation: string;
// //   };
// //   ambulance: {
// //     ambDriverName: string;
// //     ambDriverEmailId: string;
// //     ambDriverContactNumber: string;
// //     ambDriverLocation: string;
// //     ambType: string;
// //   };
// // }

// // @Component({
// //   selector: 'app-previous-bookings',
// //   templateUrl: './previous-bookings.component.html',
// //   styleUrls: ['./previous-bookings.component.css']
// // })
// // export class PreviousHospitalBookingComponent implements OnInit {

// //   previousBookings: HospitalDetails[] = [];
// //   hospitalId: String[] = [];
// //   selectedId: String = '';

// //   constructor(private http: HttpClient) {}

// //   ngOnInit(): void {
// //     this.getPreviousBookings();
// //   } 

// //   getPreviousBookings(): void{
// //     const idUrl = `http://localhost:1998/api/v1/hospital/getAllHospitalIds`;
// //     this.http.get<String[]>(idUrl).subscribe((data: String[]) => {
// //       this.hospitalId = data;
// //     });

// //     if(this.hospitalId.length > 0){
// //       this.selectedId = this.hospitalId[0];
// //       this.fetchBookingData();
// //     }

// //     //this.fetchBookingData();

// //   }
  
// //   fetchBookingData(): void {

// //     if(!this.selectedId){
// //       return;
// //     }

// //     console.log(this.previousBookings);

// //     const apiUrl = `http://localhost:2025/api/v1/booking/getAllHospitalBooking/f513f101-3e4d-40cf-bb30-8c7993f02899`;
// //     //const url = `${this.apiUrl}/previous-bookings`; // Replace with the actual endpoint
// //      this.http.get<HospitalDetails[]>(apiUrl).subscribe((data: HospitalDetails[]) => {
// //       this.previousBookings = data;
// //     });
// //   }
// // }


// interface AmbulanceData {
//   user: {
//     userName: string;
//     userContactNumber: string;
//     userEmailId: string;
//     userLocation: string;
//   };
//   ambulance: {
//     ambDriverName: string;
//     ambDriverEmailId: string;
//     ambDriverContactNumber: string;
//     ambDriverLocation: string;
//     ambType: string;
//   };
// }

// @Component({
//   selector: 'app-previous-bookings',
//   templateUrl: './previous-bookings.component.html',
//   styleUrls: ['./previous-bookings.component.css']
// })
// export class PreviousHospitalBookingComponent implements OnInit {
//   userId!: string;
//   hospitalId: String[] = [];
//   selectedId: String = '';
//   ambulanceData: AmbulanceData[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.fetchAmbulanceData();
//   }

//   getPreviousBookings(): void{
//     const idUrl = `http://localhost:1998/api/v1/hospital/getAllHospitalIds`;
//     this.http.get<String[]>(idUrl).subscribe((data: String[]) => {
//       this.hospitalId = data;
//     });
      
//     if(this.hospitalId.length > 0){
//       this.selectedId = this.hospitalId[0];
//       this.fetchAmbulanceData();
//     }
        
//   }

//   fetchAmbulanceData(): void {
//     const userId = localStorage.getItem('userId')!;
//     this.userId = userId;
//     console.log(userId);
//     const apiUrl = `http://localhost:2025/api/v1/booking/getAllUserBooking/${this.userId}`;

// //     this.http.get<AmbulanceData[]>(apiUrl).subscribe((data: AmbulanceData[]) => {
// //       this.ambulanceData = data;
// //     });
// //   }
// // }
// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// interface Booking {
//   bookingTime: string;
//   user: {
//     userName: string;
//     userContactNumber: string;
//     userEmailId: string;
//     userLocation: string;
//   };
//   ambulance: {
//     ambDriverName: string;
//     ambDriverEmailId: string;
//     ambDriverContactNumber: string;
//     ambDriverLocation: string;
//     ambType: string;
//   };
// }

// @Component({
//   selector: 'app-previous-bookings',
//   templateUrl: './previous-bookings.component.html',
//   styleUrls: ['./previous-bookings.component.css']
// })
// export class PreviousHospitalBookingComponent implements OnInit {
//   hospitalId: string = ''; // Fetch from local storage
//   bookingHistory: Booking[] = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.hospitalId = localStorage.getItem('hospitalId') || '';
//     if (this.hospitalId) {
//       this.fetchBookingHistory();
//     }
//   }

//   fetchBookingHistory(): void {
//     const apiUrl = `http://localhost:2029/api/v1/hospital/hospitalBookingHistory/${this.hospitalId}`;
//     this.http.get<Booking[]>(apiUrl).subscribe(data => {
//       this.bookingHistory = data;
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-previous-bookings',
  templateUrl: './previous-bookings.component.html',
  styleUrls: ['./previous-bookings.component.css']
})
export class  PreviousHospitalBookingComponent implements OnInit {
  bookings: any[] = [];
  hospitalId: string | null = localStorage.getItem('hospitalId'); // Retrieve userId from localStorage

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if (this.hospitalId) {
      const apiUrl = `http://localhost:2029/api/v1/hospital/hospitalBookingHistory/${this.hospitalId}`;
      this.http.get<any[]>(apiUrl).subscribe((history: any[]) => {
        this.bookings = history;
      });
    } else {
      // Handle the case where userId is not found in localStorage
      console.error('Hospital Id not found in localStorage!');
    }
  }
} 
