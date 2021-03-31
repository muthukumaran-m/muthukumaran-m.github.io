import { Component, OnInit } from '@angular/core';
import { BlogspotService } from 'src/app/services/blogspot.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {

  posts: any = [];

  constructor(private dataService: BlogspotService) { }

  ngOnInit(): void {
    this.dataService.getAllPosts().subscribe((data: any) => {
      // console.log(data.items);
      this.posts = data.items;
    })
  }

}
