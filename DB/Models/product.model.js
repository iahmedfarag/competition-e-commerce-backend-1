import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        price: {
            type: Number,
            require: true,
        },
        images: [
            {
                type: String,
                id: String,
                require: true,
            },
        ],
        sizes: [
            {
                size: String,
                unique: true,
                colors: [
                    {
                        name: String,
                        require: true,
                        unique: true,
                        quantity: Number,
                    },
                ],
            },
        ],
    },
    { timestamps: true }
);

export const productModel = model("Product", productSchema);
