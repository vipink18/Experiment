import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hospital } from '../model/Hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalRegisterService {

  private hospitalUrl = `http://localhost:1998/api/v1/hospital/addNewHospital`;

  constructor(private http: HttpClient) { }

  registerHospital(hospital: Hospital): Observable<object>{
    return this.http.post(`${this.hospitalUrl}`, hospital);
 }
}
