import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../types";
import {CartService} from "../cart.service";
import {Router} from "@angular/router";
import {ProductsService} from "../products.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-recipe',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];

  constructor(private productService: ProductsService, private cartService: CartService,  private router: Router, private snackBar: MatSnackBar) {

  }

  onHide(product:Product):void{
    product.show = false;
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((products:Product[])=>{
      this.products = products;
    });
  }

  ngOnDestroy(): void {

  }

  onClick(p:Product):void{
    alert("click");
    p.comments.push("WHAT");
  }

  onClickView(postId:any){
    this.router.navigate(['/product/' + postId]);
  }

  onClickAddToCart(product:Product){
    this.cartService.addProduct(product, 1);
    this.snackBar.open('Added to cart', 'Ok', {
      duration: 750
    });
  }
}
