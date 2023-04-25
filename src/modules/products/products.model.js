
import mongoose from 'mongoose'

const { Schema } = mongoose

//-----------------------User model
const productSchema = new Schema(
  {
    nameProduct: {
      type: String,
      required: true
    },
    category:{
      type: String,
      required: true
    },
    estoque: {
      type: Number,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    valor: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
  }
)

productSchema.pre('save', async function (next) {
  let product = this

  //Caso a senha n tenha sido modificada, apenas segue
  if (!product.isModified('name')) return next()

})

export const productModel = mongoose.model('Product', productSchema)
