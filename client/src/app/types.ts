export type Post = {
  id:number;
  title: string;
  comments:string[];
  description:string;
  image:string;
  show:boolean;
}


export type CartItem = {
  product_id: number;
  count:number;
};

export type Cart = CartItem[];
