import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ambulance } from '../model/ambulance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseUrl = "http://localhost:2024/api/v1/ambulance/addAmbulance";
  constructor(private http: HttpClient) { }

  registerAmbulance(ambulance: Ambulance): Observable<object>{
      return this.http.post(`${this.baseUrl}`, ambulance)
  }
}
