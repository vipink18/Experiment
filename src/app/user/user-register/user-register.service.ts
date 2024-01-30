import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  private userUrl = `http://localhost:2021/api/v1/user/addUser`;

  constructor(private http: HttpClient) { }

  registerUser(user: User): Observable<object>{
    return this.http.post(`${this.userUrl}`, user);
 }
}
