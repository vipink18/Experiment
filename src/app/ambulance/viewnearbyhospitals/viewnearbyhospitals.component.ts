import { Component, OnInit } from '@angular/core';
import { Hospital } from './hospital';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewnearbyhospitals',
  templateUrl: './viewnearbyhospitals.component.html',
  styleUrls: ['./viewnearbyhospitals.component.css']
})
export class ViewnearbyhospitalsComponent implements OnInit{

  hospitals: Hospital[] = [];
  locations: String[] = [];
  selectedLocation: String = '';

  constructor(private http: HttpClient){}

  ngOnInit(): void{
      this.viewNearbyHospitalsByLocation();
  }

  viewNearbyHospitalsByLocation(): void{
      const locationsUrl = `http://localhost:1998/api/v1/hospital/getAllHospitalLocations`;
      this.http.get<String[]>(locationsUrl).subscribe((data: String[]) => {
        this.locations = data;
      })

      if(this.locations.length > 0){
        this.selectedLocation = this.locations[0];
        this.fetchHospitalData();
      }
  }

  fetchHospitalData(): void{
      if(!this.selectedLocation){
        return;
      }
      
      const baseUrl = `http://localhost:1998/api/v1/hospital/getHospitalByHospitalLocation/${this.selectedLocation}`;

      this.http.get<Hospital[]>(baseUrl).subscribe((data: Hospital[]) => {
        this.hospitals = data
      });

      console.log(this.hospitals);
  }

}