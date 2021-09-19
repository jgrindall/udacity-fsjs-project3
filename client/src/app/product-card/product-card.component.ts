import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../types";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  product:Product = {
    id:1,
    title:"",
    description:"",
    fullDescription:"",
    price:0,
    images:[""],
    comments:[],
    show:true
  };

  constructor() {

  }

  ngOnInit(): void {
  }

}
