export type Product = {
  id:number;
  title: string;
  comments:string[];
  price:number;
  description:string;
  fullDescription:string;
  images:string[];
  show:boolean;
}


export type CartItem = {
  product_id: number;
  count:number;
};

export type Cart = CartItem[];

export type AuthInfo = {
  user_id:number;
  access_token:string;
  expires:number;
};

export type CartItemWithProduct = CartItem & {
  product: Product
}
