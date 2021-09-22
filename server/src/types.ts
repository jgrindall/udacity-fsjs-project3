import * as SharedTypes from "../../lib";

export type Cart = SharedTypes.Cart;
export type Product = SharedTypes.Product;

export type Users = {
    id: number;
    username: string;
};

export type TokenPayload = {
    user:Users;
    exp:number;
};