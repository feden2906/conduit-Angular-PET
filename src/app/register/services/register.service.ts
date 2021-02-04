import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FullUser} from '../models';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = 'https://conduit.productionready.io/api';


  constructor(private httpClient: HttpClient) { }

  registerUser(user): Observable<FullUser> {
    const body = {data: user};
    return this.httpClient.post<FullUser>(`${this.baseUrl}/users`, body);
  }
}

