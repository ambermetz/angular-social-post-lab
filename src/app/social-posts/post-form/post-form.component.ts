import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output() onAdd = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {}

  addPost(postForm: NgForm): void {
    // console.log(postForm.value.thought);
    // console.log(bookForm.value.title);
    this.onAdd.emit({
      title: postForm.value.title,
      thought: postForm.value.thought
    });
  }
}
