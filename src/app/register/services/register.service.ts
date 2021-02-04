import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {FullUser} from '../../models';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = 'https://conduit.productionready.io/api';


  constructor(private httpClient: HttpClient) { }

  registerUser(user): Observable<FullUser> {
    const body = {user,};
    console.log(body);
    return this.httpClient.post<FullUser>(`${this.baseUrl}/users`, body);
  }
}

