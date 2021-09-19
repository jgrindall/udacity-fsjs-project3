import { Injectable } from '@angular/core';
import {AuthInfo} from "./types";
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
  }

  get auth(){
    return this._auth.asObservable();
  }

  public isLoggedIn() {
    const expiration:(string | null) = localStorage.getItem("expires");
    if(expiration){
      const expiresAt = JSON.parse(expiration);
      return moment().isBefore(expiresAt);
    }
    return false;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getJWT(): (string | null) {
    return localStorage.getItem("access_token");
  }

  login(username: string, password: string): void {
    this.http.post(API + '/users/auth', {
      username,
      password},
      {
        'headers': this.corsHeaders
      }).subscribe(
      data => {
        const authInfo = data as AuthInfo;
        this._auth.next(authInfo);
        localStorage.setItem('access_token', JSON.stringify(authInfo.access_token));
        localStorage.setItem("expires", JSON.stringify(authInfo.expires));
        this.snackBar.open('You are now logged in', 'Ok', {
          duration: 750
        });
      }
    )
  }

  logout():void{
    this._auth.next(undefined);
    localStorage.removeItem("access_token");
    localStorage.removeItem("expires");
    this.snackBar.open('You are now logged out', 'Ok', {
      duration: 750
    });
  }

}






