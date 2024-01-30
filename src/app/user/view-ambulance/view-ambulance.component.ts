// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-view-ambulance',
//   templateUrl: './view-ambulance.component.html',
//   styleUrls: ['./view-ambulance.component.css']
// })
// export class ViewAmbulanceComponent {

//   posts:any;

//   private baseUrl = "http://localhost:2024/api/v1/ambulance/getAllAmbulances"
 
//   constructor(private http: HttpClient) { }

//   ngOnInit(){
//     this.viewAllAmbulances();
//   }

//   bookAmbulance(){
//     alert("Ambulance Booked Successfully!");
//   }

//   viewAllAmbulances(){
//     this.http.get(this.baseUrl).subscribe(response => {
//       this.posts = response;
//     });
//   }

// }
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-ambulance',
  templateUrl: './view-ambulance.component.html',
  styleUrls: ['./view-ambulance.component.css']
})
export class ViewAmbulanceComponent {

  posts: any;

  private baseUrl = "http://localhost:2024/api/v1/ambulance/getAllAmbulances"

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.viewAllAmbulances();
  }

  bookAmbulance(ambulanceId: string, ambType: string) {
    localStorage.setItem('selectedAmbulanceId', ambulanceId);
    localStorage.setItem('ambulanceType', ambType);
    alert("Ambulance Booked Successfully!, Redirecting to book Hospital...");
    this.router.navigate(['/viewHospitals']);
  }

  viewAllAmbulances() {
    this.http.get(this.baseUrl).subscribe(response => {
      this.posts = response;
    });
  }
}
