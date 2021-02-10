import {Component, OnInit} from '@angular/core';

import {SubjectTagService} from '../../services';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  chosenTag: string = null;

  constructor(private subjectTagService: SubjectTagService) { }

  ngOnInit(): void {
    this.subjectTagService.getTag().subscribe(value => {
      this.chosenTag = value;
    });
  }

  clickOnLink(name: string): void {
    this.subjectTagService.setNewTag(name);
  }
}
