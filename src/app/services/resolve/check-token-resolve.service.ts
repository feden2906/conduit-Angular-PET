import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {FullUser} from '../../models';
import {Observable} from 'rxjs';
import {AppService} from '../app.service';


@Injectable({
  providedIn: 'root'
})
export class CheckTokenResolveService implements Resolve<FullUser> {

  constructor(private appService: AppService) {
  }

  resolve(): Observable<FullUser> | Promise<FullUser> | FullUser {
    console.log('Це повертаэ resolve', this.appService.checkToken());
    return this.appService.checkToken();
  }
}
