import { Schema, model } from "mongoose";

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        icon: {
            type: String,
            required: true,
        },
        customID: {
            type: String,
            required: true,
            unique: true,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

export const categoryModel = model("Category", categorySchema);
