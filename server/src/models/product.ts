export type Product = {
    id: number;
    name: string;
    price: number;
};

const list:Product[] = [
    {
        id: 1,
        name: "product1",
        price: 10
    },
    {
        id: 2,
        name: "product2",
        price: 20
    },
    {
        id: 3,
        name: "product3",
        price: 30
    }
];

export class ProductStore {
    constructor() {}

    async index(): Promise<Product[]> {
        return Promise.resolve(list);
    }

    async find(id: number): Promise<Product> {
        const product:Product | undefined = list.find(product=>product.id === id);
        if(product){
            return Promise.resolve(product as Product);
        }
        throw new Error(`Could not get product. ${id}.`);
    }
}
