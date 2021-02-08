import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {PopularTagsService} from '../popular-tags.service';

@Injectable({
  providedIn: 'root'
})
export class PopularTagsResolveService implements Resolve<string[]>{

  constructor(private tagsService: PopularTagsService) { }

  resolve(): Observable<string[]> | Promise<string[]> | string[] {
    return this.tagsService.getAllTags();
  }
}
