import mongoose from 'mongoose'

const { Schema } = mongoose

//-----------------------User model
const shopSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product'}
  }
)

export const shopCarModel = mongoose.model('Shopcar', shopSchema)
