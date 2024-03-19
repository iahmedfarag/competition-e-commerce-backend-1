import { nanoid } from "nanoid";
import { categoryModel } from "../../DB/Models/cateogry.model.js";
import cloudinary from "../../utils/cloudinaryConfig.js";
import { productModel } from "../../DB/Models/product.model.js";
import slugify from "slugify";

export const addCategory = async (req, res) => {
    const name = req.headers.name;
    const icon = req.files[0].path;

    const slug = slugify(name, {
        replacement: "-",
        lower: true,
        trim: true,
    });
    const customID = `${slug}_${nanoid(5)}`;

    const { public_id, secure_url } = await cloudinary.uploader.upload(icon, { folder: `competition_ecommerce-1/categories/${customID}` });

    const category = await categoryModel.create({ name, icon: secure_url, customID, slug });

    return res.json({ status: "succesfully", message: "add category - done", category });
};

export const getAllCategories = async (req, res) => {
    const categories = await categoryModel.find().select("name icon slug -_id");

    return res.json({ status: "succesfully", message: "get all categories - done", categories });
};

export const getProductsOfCategory = async (req, res) => {
    const { categorySlug } = req.params;

    const category = await categoryModel.findOne({ slug: categorySlug });
    //
    // const products = await productModel.find({ category: category._id }).select("name description sizes slug images -_id").populate({ path: "category", select: "name icon slug -_id" });
    const products = await productModel.find({ category: category._id }).select("name description sizes slug images -_id");

    return res.json({ status: "succesfully", message: "get products of category - done", products });
};
