import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postForm = this.fb.group({
    userId: ['', Validators.required],
    title: ['', Validators.required],
    body: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.api.createPost(this.postForm.value).subscribe(data => {
      console.log("value submitted: ", data);
      this.postForm.reset();
    });
  }
}
