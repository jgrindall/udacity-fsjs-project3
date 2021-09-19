import { Injectable } from '@angular/core';
import {Product} from "./types";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
const API:string = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private readonly corsHeaders:HttpHeaders;

  private _products = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  }

  get products(){
    return this._products.asObservable();
  }

  getById(id:any): Observable<Product> {
    return this.http.get<Product>(API + '/products/' + id);
  }

  load(){
    return this.http.get<Product[]>(API + '/products', {
      'headers': this.corsHeaders
    }).subscribe(
      (products:Product[]) => {
        this._products.next(products);
      },
    );
  }

}
