import express from "express";
import { asyncHandler } from "../../utils/errorHandling.js";
import { allowedExtensions } from "../../utils/allowedExtentions.js";
import { multerCloudFunction } from "../../utils/multerCloudFun.js";
import { addCategory, getAllCategories, getProductsOfCategory } from "./category.controller.js";
const categoriesRouter = express.Router();

categoriesRouter.post("/add", multerCloudFunction(allowedExtensions.image).array("icon", 1), asyncHandler(addCategory));

categoriesRouter.get("/", asyncHandler(getAllCategories));

categoriesRouter.get("/:categorySlug", asyncHandler(getProductsOfCategory));

export default categoriesRouter;
