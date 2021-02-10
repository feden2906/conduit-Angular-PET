import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {FullUser} from '../models';
import {baseUrl} from '../data';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = baseUrl;


  constructor(private httpClient: HttpClient) { }

  registerUser(user): Observable<{ user: FullUser }> {
    const body = {user};
    console.log(body);
    return this.httpClient.post<{ user: FullUser }>(`${this.baseUrl}/users`, body);
  }
}

