import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateHospitalDetailsService {

  private baseUrl = `http://localhost:1998/api/v1/hospital`;

  constructor(private http: HttpClient) { }

  getHospitalDetails(hospitalId: string): Observable<any>{
    const url = `${this.baseUrl}/getHospitalById/${hospitalId}`;
    return this.http.get(url);
  }

  updateHospitalDetails(hospitalId: string, updatedDetails: any): Observable<any>{
    const url = `${this.baseUrl}/updateHospital/${hospitalId}`;
    return this.http.put(url, updatedDetails);
  }
}
