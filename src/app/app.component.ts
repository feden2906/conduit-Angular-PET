import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FullUser} from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'conduit-Angular-PET';

  user: FullUser;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value =>
      // this.user = value.userData
      console.log('Тут має бути юзік', value)
  );
  }
}
