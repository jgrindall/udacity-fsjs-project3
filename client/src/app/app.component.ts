import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "./auth.service";
import {AuthInfo} from "./types";
import {CartService} from "./cart.service";
import {ProductsService} from "./products.service";

//https://material.angular.io/components/categories

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple shop';

  constructor(public dialog: MatDialog, private authService: AuthService, private cartService:CartService, private productsService: ProductsService) {

  }

  ngOnInit(){
    let prevAuthInfo: AuthInfo | undefined = undefined;
    this.authService.auth.subscribe((authInfo: AuthInfo | undefined)=>{
      if(prevAuthInfo && !authInfo){
        this.cartService.clear();
      }
      else{
        this.cartService.load();
      }
      prevAuthInfo = authInfo;
    });
    this.productsService.load();
  }

  onActivate() {
    window.scroll(0,0);
  }

}
