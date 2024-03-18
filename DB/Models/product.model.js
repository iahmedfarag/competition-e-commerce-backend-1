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
                price: Number,
                colors: [
                    {
                        name: String,
                        quantity: Number,
                    },
                ],
                // require: true, !CHECK
            },
        ],

        category: {
            type: String,
            require: true,
        },

        bestSeller: Boolean,
        topRated: Boolean,
    },
    { timestamps: true }
);

export const productModel = model("Product", productSchema);
