import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogspotService {
  private API_KEY = "?key=AIzaSyD_dFt032FKHWwNQX5uxtByBnLAecX_wSw";
  private BLOGGER_SERVER = "https://www.googleapis.com/blogger/v3/blogs/5987947969449969612/posts";

  constructor(private httpClient: HttpClient) { }

  public getAllPosts(nextpageToken: string = '') {
    if (nextpageToken == '')
      return this.httpClient.get(this.BLOGGER_SERVER + this.API_KEY + "&maxResults=5");
    return this.httpClient.get(this.BLOGGER_SERVER + this.API_KEY + "&maxResults=5&pageToken=" + nextpageToken);
  }

  public getPost(id: string) {
    return this.httpClient.get(this.BLOGGER_SERVER + "/" + id + this.API_KEY);
  }

  public searchPosts(query: string) {
    return this.httpClient.get(this.BLOGGER_SERVER + "/search" + this.API_KEY + "&q=" + query);
  }
}
