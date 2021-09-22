import * as SharedTypes from "../../../lib";

export type Product = SharedTypes.Product;
export type CartItemWithProduct = SharedTypes.CartItemWithProduct;
export type Cart = SharedTypes.Cart;
export type CartItem = SharedTypes.CartItem;

// store JWT and userid plus expiration
export type AuthInfo = {
  user_id:number;
  access_token:string;
  expires:number;
};

