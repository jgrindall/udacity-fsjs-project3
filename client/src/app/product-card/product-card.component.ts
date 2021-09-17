import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../types";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  post:Post = {
    id:1,
    title:"",
    comments:[],
    show:true
  };

  constructor() {

  }

  ngOnInit(): void {
  }

}
