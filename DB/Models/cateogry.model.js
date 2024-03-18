import { Schema, model } from "mongoose";

const categorySchema = new Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true,
        },
        icon: {
            type: String,
            require: true,
        },
    },
    { timestamps: true }
);

export const categoryModel = model("Category", categorySchema);
