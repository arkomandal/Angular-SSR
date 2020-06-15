import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  createPost(post){
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, post);
  }

  getPosts(){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }
}
