import Joi from 'joi'

export const newProduct = Joi.object({
  nameProduct: Joi.string().required(),
  category: Joi.string().required(),
  estoque: Joi.number().required(),
  valor: Joi.number(),
  description: Joi.string().required(),
  image: Joi.string().min(6).required()
})