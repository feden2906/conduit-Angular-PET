import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  constructor(private http: HttpClient) { }

  getAllTags(): Observable<string[]> {
    return this.http.get<string[]>('https://conduit.productionready.io/api/tags');
  }
}
