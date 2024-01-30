import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserDetailsService {

  private baseUrl = `http://localhost:2021/api/v1/user`;

  constructor(private http: HttpClient) { }

  getUserDetails(userId: string): Observable<any>{
    const url = `${this.baseUrl}/getUserById/${userId}`;
    console.log(url);
    return this.http.get(url);
  }

  updateUserDetails(userId: string, updatedDetails: any): Observable<any>{
    const url = `${this.baseUrl}/updateUser/${userId}`;
    console.log(updatedDetails);
    return this.http.put(url, updatedDetails);    
  }
}
