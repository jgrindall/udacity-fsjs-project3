export type Cart = {
    id: number;
    status: string;
    user_id: number;
};

export class CartStore {
    constructor() {

    }
    async getCartForUser(): Promise<Cart> {
        const cart:Cart = {
            id: 1,
            status: "open",
            user_id: 1
        };
        return Promise.resolve(cart);
    }
}
