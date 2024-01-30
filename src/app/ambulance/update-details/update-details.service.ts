import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDetailsService {

  private baseUrl = `http://localhost:2024/api/v1/ambulance`;

  constructor(private http: HttpClient) { }

  getDriverDetails(driverId: string): Observable<any>{
    const url = `${this.baseUrl}/findAmbulanceById/${driverId}`;
    return this.http.get(url);
  }

  updateDriverDetails(driverId: string, updatedDetails: any): Observable<any>{
    const url = `${this.baseUrl}/updateDriver/${driverId}`;
    return this.http.put(url, updatedDetails);
  }

  // updateDriverDetails(data: any): Observable<any> {
  //   const url = `${this.baseUrl}/updateAmbulanceDriver`;
  //   return this.http.put(url, data);
  // }
}
