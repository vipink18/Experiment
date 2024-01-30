import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Hospital } from '../hospital/model/Hospital';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:2021/api/v1/user/userLogin'; 
  private hospitalLoginUrl = 'http://localhost:1998/api/v1/hospital/hospitalLogin'
  private ambulanceLoginUrl = 'http://localhost:2024/api/v1/ambulance/ambulanceLogin'

  constructor(private http: HttpClient) { } 

  login(loginData: any): Observable<any> {
    return this.http.post(this.apiUrl, loginData);
  }
  
  hospitalLogin(loginData: any): Observable<any> {
    return this.http.post(this.hospitalLoginUrl, loginData);
  }

  ambulanceLogin(loginData: any): Observable<any> {
    return this.http.post(this.ambulanceLoginUrl, loginData);
  }
}