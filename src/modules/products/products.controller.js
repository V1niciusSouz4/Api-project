import { productModel } from "./products.model.js"
import { fileUpload } from "../files/file.controller.js"
import { shopCarModel } from "../shopcar/shopcar.model.js"


export const createP = async (req, res) => {

    const getProductDB = await productModel.findOne({ nameProduct: req.body.nameProduct })

    if (getProductDB) return res.status(400).json({ message: "Product duplicated" })

    let data = await productModel.create(req.body)

    const { __v, ...product } = data.toObject()

    return res.status(201).json({ message: 'Product created success', data: product })

}

export const updateP = async (req, res) => {
    let product = await productModel.findById(req.params.id)

    if (!product)

        return res.status(400).json({ message: 'Product not found' })

    Object.assign(product, req.body)
    await product.save()
    return res.json({ message: 'Record updated' })
}

export const deleteProduct = async (req, res) => {

    const { id } = req.params;

    const deleteShop = await shopCarModel.find({ productId: id }).deleteMany().exec()
    const deleteProd = await productModel.deleteOne({ _id: id })

    res.json(deleteProd);

};

export const getProductById = async (req, res) => {

    const { id } = req.params
    const product = await productModel.findById({ _id: id })

    res.json(product);

};

export const listProduct = async (req, res) => {

    const products = await productModel.find({})

    res.json({ products })

};