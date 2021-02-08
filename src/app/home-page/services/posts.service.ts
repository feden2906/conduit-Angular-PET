import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseUrl} from '../../data';
import {Post} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl = baseUrl;

  constructor(private http: HttpClient) { }

  getGlobalPosts(): Observable<{ articles: Post[] }> {
    return this.http.get<{ articles: Post[] }>(`${this.baseUrl}/articles?limit=10&offset=0`);
  }
}
