export type CartItem = {
    product_id: number;
    count:number;
};

export type Cart = CartItem[];

const cartData:Record<number, Cart> = {

    1:[
        {
            product_id:1,
            count:1
        },
        {
            product_id: 2,
            count: 3
        }
    ]
};

export class CartStore {
    constructor() {

    }
    async getCartForUser(user_id:number): Promise<Cart> {
        return Promise.resolve(cartData[user_id]);
    }
    async setCartForUser(user_id:number, cart: Cart){
        cartData[user_id] = cart;
    }
}
