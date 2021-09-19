import { Injectable } from '@angular/core';
import {Product} from "./types";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const API:string = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private readonly corsHeaders:HttpHeaders;

  constructor(private http: HttpClient) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  }

  getById(id:any): Observable<Product> {
    return this.http.get<Product>(API + '/products/' + id);
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API + '/products', {
      'headers': this.corsHeaders
    });
  }

}
