import Joi from 'joi'

export const newUser = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  photo: Joi.string().optional()
})

export const updated = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  admin: Joi.boolean().optional(),
  photo: Joi.string().optional()
})
