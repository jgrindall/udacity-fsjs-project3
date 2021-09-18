import {Component, OnDestroy, OnInit} from '@angular/core';
import {Post} from "../types";
import {CartService} from "../cart.service";
import {Router} from "@angular/router";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {
  posts: Post[] = [];

  constructor(private service: ProductsService, private cartService: CartService,  private router: Router) {

  }

  onHide(post:Post):void{
    post.show = false;
  }

  ngOnInit(): void {

    this.service.getAll().subscribe((results:Post[])=>{
      this.posts = results;
    });
  }

  onClick(p:Post):void{
    alert("click");
    p.comments.push("WHAT");
  }

  onClickView(postId:any){
    this.router.navigate(['/product/' + postId]);
  }

  onClickAddToCart(post:Post){
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
