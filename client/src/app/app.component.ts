import { Component } from '@angular/core';
import {AuthService} from "./auth.service";
import {AuthInfo} from "./types";
import {CartService} from "./cart.service";
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple shop';

  constructor(
    private authService: AuthService,
    private cartService:CartService,
    private productsService: ProductsService
  ) {
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

    /**
     * load all products
     */
    this.productsService.load();
  }

  /**
   * Fix scrolling
   */
  onActivate() {
    window.scroll(0,0);
  }

  canActivate(){
    console.log("can");
  }

}
