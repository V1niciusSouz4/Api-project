import { shopCarModel } from './shopcar.model.js'

export const shops = async (req, res) => {
  let shop = (await shopCarModel.find({}, { __v: 0 }).populate('productId'))

  return res.json({ data: { shop } })
}

export const shopById = async (req, res) => {
  const { id } = req.params

  if (!id)
    return res.status(400).json({ message: 'Product Wrong' })

  const productC = await shopCarModel.findById({ _id: id }, { __v: 0 }).populate('productId')

  return res.json(productC)
}

export const createShopCar = async (req, res) => {

  const getShopDB = await shopCarModel.find({ _id:req.params.id })

  if (!getShopDB) return res.status(400).json({ message: "product not found!" })

  let data = await shopCarModel.create({ productId: req.params.id })

  return res.status(201).json({ message: 'Product created success', data: data })
}

export const updateShopCar = async (req, res) => {

  let shops = await shopCarModel.findById(req.params.id)

  if(req.body.nameProduct == shops.nameProduct){
    return res.status(400).json({ message: 'No informations changed'})
  }

  if (!shops)

    return res.status(400).json({ message: 'Product not found' })

  Object.assign(shops, req.body)
  await shops.save()
  return res.json({ message: 'Record updated' })
}

export const deleteShopCar = async (req, res) => {

  const { id } = req.params;

  const deleteShopCar = await Shopcar.deleteOne({ _id: id })

  res.json(deleteShopCar);
}
