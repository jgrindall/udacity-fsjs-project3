import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../types";
import {RecipesService} from "../recipes.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {
  name: string = "lemonade";
  ingredients:string[] = ["lemon", "water", "sugar"];
  posts: Post[] = [];

  constructor(private service: RecipesService) {

  }

  onHide(post:Post):void{
    post.show = false;
  }

  ngOnInit(): void {
    this.name = this.name + "!!";
    this.posts = this.service.getAll();
    this.service.getUsingService().subscribe(results=>{
      console.log(results);
    });
  }

  onClick(p:Post):void{
    alert("click");

    p.comments.push("WHAT");
  }

  onSubmit(a:{title:string, body:string}):void{
    debugger;
  }

  getPosts():string{
    return JSON.stringify(this.posts);
  }

  ngOnDestroy(): void {
    // Component destruction code here
  }

}
