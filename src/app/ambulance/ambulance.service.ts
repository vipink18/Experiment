import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AmbulanceService {

  private baseUrl = "http://localhost:2024/api/v1/ambulance/getAllAmbulances"
 
  constructor(private http: HttpClient) { }

  viewAllAmbulances(){
    return this.http.get(this.baseUrl);
  }

}