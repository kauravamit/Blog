import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BloggingService {

  private headers = new HttpHeaders().set("Content-Type", "application/json");

  constructor(private http: HttpClient) { }

  checkin(body: any) {
    return this.http.post("http://localhost:3000/user/checkinas", body);
  }
  createBlog(body){
    return this.http.post("http://localhost:3000/content/postcontent", body);

  }

  list(){
    return this.http.get("http://localhost:3000/content/getbloglist")

  }
  getcontent(body){
    return this.http.post("http://localhost:3000/content/getcontent",body)
  }
}
