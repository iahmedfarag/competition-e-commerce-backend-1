import multer from "multer";
import { allowedExtensions } from "./allowedExtentions.js";

export const multerCloudFunction = (allowedExtensionsArr) => {
    if (!allowedExtensionsArr) {
        allowedExtensionsArr = allowedExtensions.image;
    }
    //================================== Storage =============================
    const storage = multer.diskStorage({});

    //================================== File Filter =============================
    const fileFilter = function (req, file, cb) {
        if (allowedExtensionsArr.includes(file.mimetype)) {
            return cb(null, true);
        }

        cb(new Error("invalid extension"), false);
    };

    const fileUpload = multer({
        fileFilter,
        storage,
    });
    return fileUpload;
};
