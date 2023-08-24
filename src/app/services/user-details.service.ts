import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Post {
  title: String;
  body: String;
};

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  url = "";

  constructor(private http: HttpClient) { } 
  
  getNewData() {
    this.http.get<Post>(this.url).subscribe(res => {
      //this.postTitle = res.title;
    });
  }

}
