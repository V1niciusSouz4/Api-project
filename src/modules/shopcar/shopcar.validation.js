import Joi from 'joi'

export const newProduct = Joi.object({
  nameProduct: Joi.string().required(),
  category: Joi.string().required(),
  estoque: Joi.number().required(),
  description: Joi.string().min(5).required(),
  cost: Joi.number().required(),
  photo: Joi.string().required()
})
