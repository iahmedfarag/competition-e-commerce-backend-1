import express from "express";
import { asyncHandler } from "../../utils/errorHandling.js";
import { addProduct, addProductImages, getSingleProduct } from "./prooducts.controller.js";
import { allowedExtensions } from "../../utils/allowedExtentions.js";
import { multerCloudFunction } from "../../utils/multerCloudFun.js";
const productsRouter = express.Router();

productsRouter.post("/add", asyncHandler(addProduct));
productsRouter.post("/add/images", multerCloudFunction(allowedExtensions.image).array("images", 4), asyncHandler(addProductImages));
productsRouter.get("/:productSlug", asyncHandler(getSingleProduct));

export default productsRouter;
