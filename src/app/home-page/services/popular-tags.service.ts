import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  constructor(private http: HttpClient) { }

  getAllTags(): Observable<{ tags: string[] }> {
    return this.http.get<{ tags: string[] }>('https://conduit.productionready.io/api/tags');
  }
}
