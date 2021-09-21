import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {LoginComponent} from "../login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {SignupComponent} from "../signup/signup.component";
import {AuthInfo} from "../types";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  isLoggedIn:boolean = false;

  constructor(private authService:AuthService, public dialog: MatDialog, ) { }

  ngOnInit(): void {
    this.authService.auth.subscribe((data: AuthInfo | undefined)=>{
      if(data) {
        this.isLoggedIn = !!data;
      }
    });
  }

  onClickSignIn(){
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '600px',
      data: 'Login'
    });
    dialogRef.componentInstance.onClose.subscribe(()=>{
      dialogRef.close();
    });
  }
  onClickGuest(){
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '600px',
      data: 'Create an account'
    });
    dialogRef.componentInstance.onClose.subscribe(()=>{
      dialogRef.close();
    });
  }

}

