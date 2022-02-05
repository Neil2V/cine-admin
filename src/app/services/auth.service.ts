import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginAdmin } from '../models/login-admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:8080/auth/";

  constructor(
    private http: HttpClient
  ) { }

  public login(loginAdmin: LoginAdmin): Observable<JwtDto>{
      return this.http.post<JwtDto>(this.authUrl+'login',loginAdmin);
  }

}
