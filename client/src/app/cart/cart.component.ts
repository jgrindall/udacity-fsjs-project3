import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Product, CartItemWithProduct, CartItem, Cart} from "../types";
import {ProductsService} from "../products.service";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartCombinedWithProducts:CartItemWithProduct[] = [];
  total:number = 0;

  constructor(private cartService: CartService, private productService:ProductsService) {
  }

  onCheckout(){
    alert("checkout");
  }

  ngOnInit(): void {
    combineLatest([this.cartService.cart, this.productService.products]).subscribe(results => {

      const products:Product[] = results[1];

      const getProductById = (id:number) : (Product | undefined) =>{
        return products.find((product: Product) => product.id === id);
      };

      const matchingProducts:Cart = results[0].filter((cartItem:CartItem)=> {
        return !!getProductById(cartItem.product_id);
      });

      this.cartCombinedWithProducts = matchingProducts.map((cartItem:CartItem)=>{
        const product = getProductById(cartItem.product_id) as Product;
        return {
          ...cartItem,
          product:product
        };
      });
      this.total = this.cartCombinedWithProducts.reduce((memo:number, current: CartItem & { product: Product })=>{
        return memo + current.count * current.product.price;
      }, 0);
    });

  }

  onClickRemove(id:number){
    this.cartService.remove(id);
  }

  onClickUpdate(id:number, count:number){
    this.cartService.update(id, count);
  }

}
