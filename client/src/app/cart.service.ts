import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Cart, CartItem, Product} from "./types";
import {AuthService} from "./auth.service";

const API:string = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private readonly corsHeaders:HttpHeaders;

  private _cart = new BehaviorSubject<Cart>([]);

  constructor(private http: HttpClient, private authService:AuthService) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'JWT ' + this.authService.getJWT()
    });
  }

  get cart(){
    return this._cart.asObservable();
  }

  public load(){
    if(this.authService.isLoggedIn()){
      this.loadFromDatabase();
    }
    else{
      this.loadFromLocalStorage();
    }
  }

  public addProduct(product:Product, count: number){
    let cart:Cart = this._cart.getValue();
    const currentItem:CartItem | undefined = cart.find(item => item.product_id === product.id);
    if(currentItem){
      currentItem.count ++;
    }
    else{
      cart = [
        ...cart,
        {
          product_id: product.id,
          count
      }];
    }
    this.saveCart(cart);
  }

  private saveCart(cart: Cart){
    if(this.authService.isLoggedIn()){
      this.saveToDatabase(cart);
    }
    else{
      this.saveToLocalStorage(cart);
    }
  }

  private saveToDatabase(cart: Cart){
    this.http.post(API + '/cart/user/1', cart,{
      'headers': this.corsHeaders
    }).subscribe(
      () => {
        this._cart.next(cart);
      },
    );
  }

  private saveToLocalStorage(cart: Cart){
    localStorage.setItem("cart", JSON.stringify(cart));
    this._cart.next(cart);
  }

  private loadFromLocalStorage(){
    const item: string | null = localStorage.getItem("cart");
    const cart = item ? JSON.parse(item) as Cart : null;
    if(cart){
      this._cart.next(cart);
    }
  }

  private loadFromDatabase() : void{
    this.http.get(API + '/cart/user/1', {
      'headers': this.corsHeaders
    }).subscribe(
      data => {
        this._cart.next(data as Cart);
      },
    );
  }
}


