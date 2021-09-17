import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../types";
import {RecipesService} from "../recipes.service";
import {CartService} from "../cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {
  name: string = "lemonade";
  ingredients:string[] = ["lemon", "water", "sugar"];
  posts: Post[] = [];

  constructor(private service: RecipesService, private cartService: CartService,  private router: Router) {

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

  onClickView(postId:any){
    this.router.navigate(['/product/' + postId]);
  }

  onClickAddToCart(){
    alert(this.cartService);
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
