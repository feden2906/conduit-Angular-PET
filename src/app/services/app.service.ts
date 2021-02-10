import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FullUser} from '../models';
import {Observable} from 'rxjs';
import {baseUrl} from '../data';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = baseUrl;

  constructor(private httpClient: HttpClient) { }

  checkToken(): Observable<FullUser> {
    const token = localStorage.getItem('jwtToken');
    const data = {headers: {
        authorization: `Token ${token}`
      }};

    return token
              ? this.httpClient.get<FullUser>(`${this.baseUrl}/user`, data)
              : null;
  }
}
