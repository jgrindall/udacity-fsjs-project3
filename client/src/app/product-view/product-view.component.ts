import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../types";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  post: Post = {
    id:1,
  title:"",
  comments:[],
  show:true
  };

  constructor(private route: ActivatedRoute, private service: ProductsService) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.service.getById(id);
    /*this.service.getById(id).subscribe(result=>{
      console.log(result);
      this.post = result;
    });*/
  }

}

