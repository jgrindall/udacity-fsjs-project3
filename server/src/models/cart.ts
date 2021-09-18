export type CartItem = {
    product_id: number;
    count:number;
};

export type Cart = CartItem[];

const cartData:Record<number, Cart> = {};

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
