import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  users: any = [];
  content: any = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getPosts().subscribe(data => {
      console.log('data: ', data);
      this.content = data
    });
  }

}
