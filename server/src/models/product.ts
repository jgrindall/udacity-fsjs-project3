import {Product} from "../types";

/**
 * There is no database, just a hard-coded list of products
  */

const list:Product[] = [
    {
        id: 1,
        title: "Product 1",
        description: "1: Lorem ipsum dolor sit amet",
        fullDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        images:[
            "https://johnlewis.scene7.com/is/image/JohnLewis/003839248?$rsp-pdp-port-640$",
            "https://johnlewis.scene7.com/is/image/JohnLewis/003839248alt1?$rsp-pdp-port-640$",
            "https://johnlewis.scene7.com/is/image/JohnLewis/003839248alt2?$rsp-pdp-port-640$",
            "https://johnlewis.scene7.com/is/image/JohnLewis/003839248alt4?$rsp-pdp-port-640$"
        ],
        price: 30,
        show: true
    },
    {
        id: 2,
        title: "Product 2",
        description: "2: Lorem ipsum dolor sit amet",
        fullDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        images:[
            "https://johnlewis.scene7.com/is/image/JohnLewis/005610645?$rsp-pdp-port-640$",
            "https://johnlewis.scene7.com/is/image/JohnLewis/005610645alt1?$rsp-pdp-port-640$",
            "https://johnlewis.scene7.com/is/image/JohnLewis/005610645alt2?$rsp-pdp-port-640$",
            "https://johnlewis.scene7.com/is/image/JohnLewis/005610645alt3?$rsp-pdp-port-640$"

        ],
        price: 20,
        show: true
    },
    {
        id: 3,
        title: "Product 3",
        description: "3: Lorem ipsum dolor sit amet",
        fullDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        images:[
            "https://johnlewis.scene7.com/is/image/JohnLewis/004045156?$rsp-pdp-port-640$",
            "https://johnlewis.scene7.com/is/image/JohnLewis/004045156alt1?$rsp-pdp-port-640$",
            "https://johnlewis.scene7.com/is/image/JohnLewis/004045156alt4?$rsp-pdp-port-640$",
            "https://johnlewis.scene7.com/is/image/JohnLewis/004045156alt3?$rsp-pdp-port-640$"
        ],
        price: 10,
        show: true
    },
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
