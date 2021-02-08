import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../services';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  chosenTag: string = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
