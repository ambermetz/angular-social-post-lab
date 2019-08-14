import { Component, OnInit, Input } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  selector: "app-social-posts",
  templateUrl: "./social-posts.component.html",
  styleUrls: ["./social-posts.component.css"]
})
export class SocialPostsComponent implements OnInit {
  showPost: boolean = false;
  @Input() index: number;
  posts: Post[] = [
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool."
    },
    {
      title: "Angular",
      thought: "Angular is overwhelming"
    }
  ];

  constructor() {}

  onRemoveHandler(index): void {
    this.posts.splice(index, 1);
  }

  onSubmit(newPost) {
    console.log(newPost);
    this.posts.unshift(newPost.value);
    this.toggleForm();
  }

  toggleForm(): void {
    this.showPost = !this.showPost;
  }

  ngOnInit() {}
}
