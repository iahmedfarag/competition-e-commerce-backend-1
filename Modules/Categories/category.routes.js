import express from "express";
import { asyncHandler } from "../../utils/errorHandling.js";
import { allowedExtensions } from "../../utils/allowedExtentions.js";
import { multerCloudFunction } from "../../utils/multerCloudFun.js";
import { addCategory } from "./category.controller.js";
const categoriesRouter = express.Router();

categoriesRouter.post("/add", asyncHandler(addCategory));

export default categoriesRouter;
