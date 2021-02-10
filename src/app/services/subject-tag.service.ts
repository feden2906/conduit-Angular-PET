import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectTagService {

  private chosenTag = new BehaviorSubject<string>('global');

  constructor() { }

  getTag(): BehaviorSubject<string> {
    return this.chosenTag;
  }
  setNewTag(newTag): void {
    this.chosenTag.next(newTag);
  }
}
