import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogspotService } from 'src/app/services/blogspot.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  post: any;
  isPostLoading:boolean=true;

  constructor(
    private dataService: BlogspotService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let postId = this.route.snapshot.paramMap.get('postID') || '';

    this.dataService.getPost(postId).subscribe((data: any) => {
      // console.log(data);
      this.post = data;
      this.isPostLoading=false;
    })

  }

}
