import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseUrl} from '../data';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsService {

  baseUrl = baseUrl;

  constructor(private http: HttpClient) { }

  getAllTags(): Observable<{ tags: string[] }> {
    return this.http.get<{ tags: string[] }>(`${this.baseUrl}/tags`);
  }
}
