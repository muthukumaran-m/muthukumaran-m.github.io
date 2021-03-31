import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogspotService {
  private API_KEY = "?key=AIzaSyD_dFt032FKHWwNQX5uxtByBnLAecX_wSw";
  private BLOGGER_SERVER = "https://www.googleapis.com/blogger/v3/blogs/5987947969449969612/posts";

  constructor(private httpClient: HttpClient) { }

  public getAllPosts() {
    return this.httpClient.get(this.BLOGGER_SERVER+this.API_KEY);
  }

  public getPost(id:string) {
    return this.httpClient.get(this.BLOGGER_SERVER+"/"+id+this.API_KEY);
  }
}
