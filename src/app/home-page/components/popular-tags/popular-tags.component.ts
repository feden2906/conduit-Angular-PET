import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PopularTagsService} from '../../services';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.css']
})
export class PopularTagsComponent implements OnInit {

  popularTags: string[];

  constructor(private tagService: PopularTagsService) {

  }

  ngOnInit(): void {
    this.tagService.getAllTags().subscribe(value => this.popularTags = value.tags);
  }

  clickToChoseTag(tag): void {
    console.log(tag);
  }
}
