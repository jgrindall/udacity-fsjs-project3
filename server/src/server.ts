import express, {Request, Response, Application} from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cartRoutes from "./handlers/api/carts";
import productRoutes from "./handlers/api/products";

const app: Application = express();

const port: number = 3000;

app.use(bodyParser.json());

// CORS-enable all end points
app.use(
    cors({
        origin: "*"
    })
);

// set up routing
app.use("/api/cart/", cartRoutes);
app.use("/api/products/", productRoutes);

app.get("/", function(req: Request, res: Response) {
    res.send("Hello World!");
});

app.listen(port, function() {
    console.log(`starting app on port: ${port}`);
});

export default app;
