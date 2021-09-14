import express from "express";
import {UsersStore} from "../../models/users";
import jwt from "jsonwebtoken";

const JWT_TOKEN_SECRET: string = process.env.JWT_TOKEN_SECRET as string;

const store:UsersStore = new UsersStore();

export default express
    .Router()

    // login. Returns the token to be used later.
    .post("/auth", async (req: express.Request, res: express.Response) => {
        const body = req.body as {username: string; password: string};
        const user = await store.authenticate(body.username, body.password);
        if(user) {
            const token = jwt.sign({user: user}, JWT_TOKEN_SECRET, {
                expiresIn: "1h"
            });
            res
                .status(200)
                .header("")
                .json({access_token:token});
        }
        else {
            res
                .status(401)
                .json(null);
        }
    });

