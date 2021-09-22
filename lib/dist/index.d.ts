/**
 * Product
 */
export declare type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    fullDescription: string;
    images: string[];
    show: boolean;
};
export declare type CartItem = {
    product_id: number;
    count: number;
};
/**
 * A shopping cart is just an array of items
 */
export declare type Cart = CartItem[];
/**
 * join Cart item with products
 */
export declare type CartItemWithProduct = CartItem & {
    product: Product;
};
//# sourceMappingURL=index.d.ts.map