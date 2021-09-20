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

  private _cart = new BehaviorSubject<Cart>([]);

  constructor(private http: HttpClient, private authService:AuthService) {

  }

  getHeaders(){
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'JWT ' + this.authService.getJWT()
    });
  }

  get cart(){
    return this._cart.asObservable();
  }

  public clear(){
    this.saveToLocalStorage([]);
  }

  public load(){
    if(this.authService.isLoggedIn()){
      this.loadFromDatabase();
    }
    else{
      this.loadFromLocalStorage();
    }
  }

  public remove(id:number){
    let cart:Cart = this._cart.getValue();
    cart = cart.filter(item => item.product_id != id);
    this.saveCart(cart);
  }

  public update(id:number, count:number){
    let cart:Cart = this._cart.getValue();
    const cartItem = cart.find(item => item.product_id === id);
    if(cartItem) {
      cartItem.count = count;
    }
    this.saveCart(cart);
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
      'headers': this.getHeaders()
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
      'headers': this.getHeaders()
    }).subscribe(
      data => {
        localStorage.removeItem("cart");
        this._cart.next(data as Cart);
      },
    );
  }
}


