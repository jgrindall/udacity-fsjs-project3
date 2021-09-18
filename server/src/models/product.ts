export type Product = {
    id: number;
    title: string;
    price: number;
    comments?:string[];
    description:string;
    image:string;
    show:boolean;
};

const list:Product[] = [
    {
        id: 1,
        title: "product1",
        description: "They're green",
        image:"https://cdn11.bigcommerce.com/s-2fhihzl616/images/stencil/960w/products/5790/22258/mt06-pleated-cotton-chino-trousers-green_1__23768.1593295529.1280.1280__77291__83785.1620305560.jpg?c=1",
        price: 10,
        show: true
    },
    {
        id: 2,
        title: "product2",
        description: "They're red",
        image:"https://cdn11.bigcommerce.com/s-2fhihzl616/images/stencil/960w/products/5790/22258/mt06-pleated-cotton-chino-trousers-green_1__23768.1593295529.1280.1280__77291__83785.1620305560.jpg?c=1",
        price: 20,
        show: true
    },
    {
        id: 3,
        title: "product3",
        description: "They're pink",
        image:"https://cdn11.bigcommerce.com/s-2fhihzl616/images/stencil/960w/products/5790/22258/mt06-pleated-cotton-chino-trousers-green_1__23768.1593295529.1280.1280__77291__83785.1620305560.jpg?c=1",
        price: 30,
        show: true
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
