import express from "express";
import {CartStore, Cart} from "../../models/cart";

const store = new CartStore();

export default express
    .Router()

    //get cart
    .get("/user/:user_id", async (req: express.Request, res: express.Response) => {
        const user_id = parseInt(req.params.user_id);
        const cart:Cart = await store.getCartForUser(user_id);
        res
            .status(200)
            .json(cart);
    })

    //set cart
    .post("/user/:user_id", async (req: express.Request, res: express.Response) => {
        const user_id = parseInt(req.params.user_id);
        const cart = req.body as Cart;
        await store.setCartForUser(user_id, cart);
        res.status(200);
    });
