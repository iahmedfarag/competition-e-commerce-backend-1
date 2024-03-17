import express from "express";
import { asyncHandler } from "../../utils/errorHandling.js";
import { getAllProducts } from "./prooducts.controller.js";
const productsRouter = express.Router();

productsRouter.get("/", asyncHandler(getAllProducts));

export default productsRouter;
