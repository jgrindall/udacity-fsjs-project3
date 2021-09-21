import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AuthService} from "./auth.service";
import {AuthInfo} from "./types";
import {CartService} from "./cart.service";
import {ProductsService} from "./products.service";
import {CheckoutDialogComponent} from "./checkout-dialog/checkout-dialog.component";

//https://material.angular.io/components/categories

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple shop';

  constructor(public dialog: MatDialog, private authService: AuthService, private cartService:CartService, private productsService: ProductsService) {

    const dialogRef = this.dialog.open(CheckoutDialogComponent, {
      width: '400px',
      data: 'Please wait',
      disableClose: true
    });

  }

  ngOnInit(){
    let prevAuthInfo: AuthInfo | undefined = undefined;
    this.authService.auth.subscribe((authInfo: AuthInfo | undefined)=>{
      if(prevAuthInfo && !authInfo){
        // logout
        this.cartService.onLogout();
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
