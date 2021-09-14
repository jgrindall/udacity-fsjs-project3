import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Post} from "../../types";

@Component({
  selector: 'app-recipecomment',
  templateUrl: './recipecomment.component.html',
  styleUrls: ['./recipecomment.component.css']
})
export class RecipecommentComponent implements OnInit {

  @Input()
  post:Post = {
    id:0,
    title:"",
    comments:[],
    show:true
  };

  @Output()
  hidePost: EventEmitter<Post> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  onClickDelete(){
    this.hidePost.emit(this.post);
  }

}
