import * as SharedTypes from "../../../types/types";

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

