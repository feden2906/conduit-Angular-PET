import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from '../../services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  shovingPosts = null;

  constructor(private postsService: PostsService) {
    this.postsService.getGlobalPosts().subscribe(value => this.shovingPosts = value.articles);
  }

  ngOnInit(): void {
  }

}
