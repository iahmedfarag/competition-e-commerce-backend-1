import { config } from "dotenv";
config();
import express from "express";
import productsRouter from "./Modules/Products/products.routes.js";
import { connectionDB } from "./DB/Connection.js";
const app = express();

import cors from "cors";
import categoriesRouter from "./Modules/Categories/category.routes.js";

app.use(express.json());

connectionDB();

app.use(cors());
app.get("/", (req, res) => {
    res.send("<h1>hello hello</h1>");
});

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.listen(3000 || process.env.PORT, () => {
    console.log("server is listening on port 3000");
});
