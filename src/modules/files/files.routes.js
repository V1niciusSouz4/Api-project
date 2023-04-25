import { Router } from "express";
import multer from "multer";
import {
    diskStorage,
    imageFileFilter,
    limits
} from '../../middlewares/fileUpload.js'
import { fileUpload, viewImage } from "./file.controller.js";
const fileRouts = Router()

fileRouts.post(
    '/upload',
    multer({ storage: diskStorage, limits: limits, fileFilter: imageFileFilter }).single(
        'file'
    ),
    fileUpload
)

fileRouts.get('/view/:imageName', viewImage)

export { fileRouts }