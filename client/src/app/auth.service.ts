import { Injectable } from '@angular/core';
import {AuthInfo, Cart} from "./types";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {MatSnackBar} from '@angular/material/snack-bar';
import * as moment from "moment";

const API:string = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly corsHeaders:HttpHeaders;

  private _auth = new BehaviorSubject<AuthInfo | undefined>(undefined);

  constructor(private http:HttpClient, private snackBar: MatSnackBar) {
    this.corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    if(this.isLoggedIn()){
      this._auth.next(this.loadAuthInfo());
    }
  }

  get auth(){
    return this._auth.asObservable();
  }

  private loadAuthInfo(): AuthInfo | undefined{
    const authInfo = localStorage.getItem("authInfo");
    if(authInfo){
      return JSON.parse(authInfo) as AuthInfo;
    }
    return undefined

  }

  public isLoggedIn() : boolean{
    const authInfo = this.loadAuthInfo();
    if(!authInfo){
      return false;
    }
    const expiration:number = authInfo.expires;
    if(expiration){
      const now = moment();
      const expires = moment.unix(expiration);
      return now.isBefore(expires);
    }
    return false;
  }

  getJWT(): (string | null) {
    const authInfo = this.loadAuthInfo();
    if(!authInfo){
      return null;
    }
    return authInfo.access_token;
  }

  login(username: string, password: string, cart?: Cart): void {
    this.http.post(API + '/users/auth', {
        username,
        password,
        cart
      },
      {
        'headers': this.corsHeaders
      }).subscribe(
      data => {
        const authInfo = data as AuthInfo;
        localStorage.setItem('authInfo', JSON.stringify(authInfo));
        this.snackBar.open('You are now logged in', 'Ok', {
          duration: 1500
        });
        this._auth.next(authInfo);
      }
    )
  }

  signup(username: string, password: string, cart?: Cart): void {
    alert("sign up");
  }

  logout():void{
    localStorage.removeItem("authInfo");
    this.snackBar.open('You are now logged out', 'Ok', {
      duration: 1500
    });
    this._auth.next(undefined);
  }

}






