import express from "express";
import {CartStore, Cart} from "../../models/cart";

const store = new CartStore();

export default express
    .Router()

    //get orders by user
    .get("/user/:user_id", async (req: express.Request, res: express.Response) => {
        //const user_id = parseInt(req.params.user_id);
        const cart:Cart = await store.getCartForUser();
        res
            .status(200)
            .json(cart);
    })

    //add product to order, given quantity and product id
    .post("/:order_id/products", async (req: express.Request, res: express.Response) => {
        console.log(req, res);
    });
