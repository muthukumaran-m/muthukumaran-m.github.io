import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { BlogspotService } from 'src/app/services/blogspot.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

  posts: any = [];
  nextPageToken: string = '';
  isPostsLoading: boolean = false;

  query: string = '';
  noPostsFound:string='';

  constructor(private dataService: BlogspotService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.isPostsLoading = true;
    this.dataService.getAllPosts(this.nextPageToken).subscribe((data: any) => {
      this.nextPageToken = data.nextPageToken || '';
      this.posts = this.posts.concat(data.items);
      this.isPostsLoading = false;
    })
  }

  searchPosts() {
    this.isPostsLoading = true;
    this.dataService.searchPosts(this.query).subscribe((data: any) => {
      this.nextPageToken = '';
      this.posts = data.items;
      this.isPostsLoading = false;
    })
  }

  clearSearch() {
    if (this.query != "") {
      this.posts = [];
      this.query = "";
      this.getAllPosts();
      if(this.posts.length)
        this.noPostsFound="No posts found";
    }
  }

}
