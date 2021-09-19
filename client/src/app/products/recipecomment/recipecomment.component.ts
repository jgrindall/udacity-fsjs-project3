import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../../types";

@Component({
  selector: 'app-recipecomment',
  templateUrl: './recipecomment.component.html',
  styleUrls: ['./recipecomment.component.css']
})
export class RecipecommentComponent implements OnInit {

  @Input()
  product:Product = {
    id:0,
    title:"",
    comments:[],
    show:true,
    description:"",
    fullDescription:"",
    price:0,
    images:[""]
  };

  @Output()
  hidePost: EventEmitter<Product> = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
  }

  onClickDelete(){
    this.hidePost.emit(this.product);
  }

}
