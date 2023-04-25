import { Router } from "express";
import {
    createP,
    deleteProduct,
    getProductById,
    listProduct,
    updateP
} from './products.controller.js'
import { validate } from '../../middlewares/validate.js'
import { asyncWrapper } from '../../middlewares/asyncWrapper.js'
import { newProduct } from "./product.validate.js";

const productRoutes = Router()

productRoutes.get('/get/:id', asyncWrapper(getProductById) )
productRoutes.get('/list', asyncWrapper(listProduct) )
productRoutes.post('/add', validate(newProduct), asyncWrapper(createP) )
productRoutes.put('/update/:id', validate(newProduct), asyncWrapper(updateP) )
productRoutes.delete('/delete/:id', asyncWrapper(deleteProduct) )

export { productRoutes }



