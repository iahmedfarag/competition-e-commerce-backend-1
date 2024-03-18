import express from "express";
import { asyncHandler } from "../../utils/errorHandling.js";
import { addProduct, getAllProducts } from "./prooducts.controller.js";
import { allowedExtensions } from "../../utils/allowedExtentions.js";
import { multerCloudFunction } from "../../utils/multerCloudFun.js";
const productsRouter = express.Router();

productsRouter.post("/add", multerCloudFunction(allowedExtensions.image).array("images", 4), asyncHandler(addProduct));

productsRouter.get("/", asyncHandler(getAllProducts));

export default productsRouter;
