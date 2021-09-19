import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../types";
import {ProductsService} from "../products.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product: Product = {
    id:1,
    description:"",
    fullDescription:"",
    price:0,
    images:[""],
  title:"",
  comments:[],
  show:true
  };

  count:number = 1;
  addedToCart:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private snackBar: MatSnackBar,
    private cartService: CartService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService
      .getById(id)
      .subscribe((product:Product)=>{
        this.product = product;
      });
  }

  onClickAddToCart() {
    this.cartService.addProduct(this.product, this.count);
    this.snackBar.open('Added to cart', 'Ok', {
      duration: 750
    });
    this.addedToCart = true;
  }
}
