import { productModel } from "../../DB/Models/product.model.js";

export const addProduct = async (req, res) => {
    const { name, description, images, sizes, category, bestSeller, topRated } = req.body;

    console.log(req.body);
    console.log(req.files);

    // const finalProduct = await productModel.create(req.body)

    return res.json({ status: "succesfully", message: "add product - done" });
};

export const getAllProducts = async (req, res) => {
    return res.json({ status: "succesfully", message: "get all product - done" });
};
