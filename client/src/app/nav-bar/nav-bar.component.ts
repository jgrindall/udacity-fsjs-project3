import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
import {AuthService} from "../auth.service";
import {AuthInfo, Cart} from "../types";
import {CartService} from "../cart.service";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public userLoggedIn = false;
  cartSize:number = 0;

  constructor(public dialog: MatDialog, private authService: AuthService, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.authService.auth.subscribe((data: AuthInfo | undefined)=>{
      this.userLoggedIn = !!data;
    });
    this.cartService.cart.subscribe(cart=>{
      debugger;
      this.cartSize = cart.length;
    });
  }

  getBadge():string{
    return this.cartSize >= 1 ? "" + this.cartSize : "";
  }

  logout(){
    this.authService.logout();
  }

  login(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px',
      data: 'Login'
    });
    dialogRef.componentInstance.onClose.subscribe(()=>{
      dialogRef.close();
    });
  }

}
