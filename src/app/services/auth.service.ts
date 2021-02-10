import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FullUser} from '../models';
import {baseUrl} from '../data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = baseUrl;

  constructor(private http: HttpClient) {}

  loginUser(user): Observable<{ user: FullUser }> {
    const body = {user};
    console.log(body);
    return this.http.post<{ user: FullUser }>(`${this.baseUrl}/users/login`, body);
  }

  registerUser(user): Observable<{ user: FullUser }> {
    const body = {user};
    console.log(body);
    return this.http.post<{ user: FullUser }>(`${this.baseUrl}/users`, body);
  }

  isLoggedIn(): boolean {
    return !!this.getJwtToken();
  }

  getJwtToken(): string {
    return localStorage.getItem('jwtToken');
  }

  setJwtToken(jwt): void{
    localStorage.setItem('jwtToken', jwt);
  }
}
