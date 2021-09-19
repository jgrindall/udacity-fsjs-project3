import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Cart, Product} from "../types";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Cart = [];
  products:Product[] = [];

  constructor(private cartService: CartService, private productService:ProductsService) {
  }

  ngOnInit(): void {
    this.cartService.cart.subscribe(cart=>{
      this.cart = cart;
    });
    this.productService.getAll().subscribe((products:Product[])=>{
      this.products = products;
    });

  }



}
