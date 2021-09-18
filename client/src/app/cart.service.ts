import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cart} from "./types";

const API:string = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private readonly corsHeaders:HttpHeaders;

  constructor(private http: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  }

  getCart(): Observable<Cart> {
    return this.http.get<Cart>(API + '/cart/user/1', {
      'headers': this.corsHeaders
    });
  }

  setCart(c:Cart){
    return this.http.post<Cart>(API + '/cart/user/1', c,{
      'headers': this.corsHeaders
    });
  }
}
