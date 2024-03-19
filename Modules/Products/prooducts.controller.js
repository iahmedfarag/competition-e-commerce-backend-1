import { nanoid } from "nanoid";
import { categoryModel } from "../../DB/Models/cateogry.model.js";
import { productModel } from "../../DB/Models/product.model.js";
import cloudinary from "../../utils/cloudinaryConfig.js";
import slugify from "slugify";

export const addProduct = async (req, res) => {
    const { name, description, sizes, categoryID, bestSeller, topRated } = req.body;

    const slug = slugify(name, {
        replacement: "-",
        lower: true,
        trim: true,
    });

    const customID = `${slug}_${nanoid(5)}`;

    const category = await categoryModel.findById(categoryID);

    if (!category) throw new Error("CATEGORY NOT FOUND");

    const product = await productModel.create({ name, description, sizes, category: category._id, bestSeller, topRated, customID, slug: `${slug}-${nanoid(3)}` });

    return res.json({ status: "succesfully", message: "add product - done", product: product._id });
};

export const addProductImages = async (req, res) => {
    const images = req.files;
    const { categoryid, productid } = req.headers;

    const category = await categoryModel.findById(categoryid);
    const product = await productModel.findById(productid);

    if (!category | !product) throw new Error("CATEGORY | PRODUCT NOT FOUND");

    let imagesArr = [];
    for (let i = 0; i < images.length; i++) {
        const { public_id, secure_url } = await cloudinary.uploader.upload(images[i].path, { folder: `competition_ecommerce-1/categories/${category.customID}/products/${product.customID}/` });
        imagesArr.push({ public_id, secure_url });
    }

    product.images = imagesArr;

    await product.save();

    return res.json({ status: "succesfully", message: "add product images - done" });
};

export const getSingleProduct = async (req, res) => {
    const { productSlug } = req.params;

    console.log(req.params);

    const product = await productModel.findOne({ slug: productSlug }).select("name description sizes slug images -_id").populate({ path: "category", select: "name icon slug -_id" });

    return res.json({ status: "succesfully", message: "get single product - done", product });
};
