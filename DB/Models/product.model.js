import { Schema, model } from "mongoose";

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        images: [
            {
                secure_url: {
                    type: String,
                    required: true,
                },
                public_id: {
                    type: String,
                    required: true,
                },
            },
        ],

        sizes: [
            {
                size: String,
                price: Number,
                colors: [
                    {
                        name: String,
                        hex: String,
                        quantity: Number,
                    },
                ],
            },
        ],

        category: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Category",
        },

        customID: {
            type: String,
            required: true,
        },

        slug: {
            type: String,
            required: true,
            unique: true,
        },

        bestSeller: Boolean,
        topRated: Boolean,
    },
    { timestamps: true }
);

export const productModel = model("Product", productSchema);
