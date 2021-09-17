import { Injectable } from '@angular/core';
import {Post} from "./types";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getById(id:any):Post{
    return {
      title: "t0",
      id: 0,
      comments: ["great", "ok"],
      show:true
    };
  }
}
