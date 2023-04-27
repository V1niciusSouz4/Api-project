import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    adminGlobal:{
      type: Boolean,
      default: true
    },
    admin:{
      type: Boolean,
      default: true
    },
    secret: {
      type: String
    },
    photo: {
      type: String
    }
  },
  { timestamps: true }
)

userSchema.pre('save', async function (next) {
  let user = this

  if (!user.isModified('password')) return next()

  let hashedPassword = await bcrypt.hash(user.password, 10)

  user.password = hashedPassword

  next()
})

userSchema.methods.matchPasswords = async function (userPassword) {

  const isMatch = await bcrypt.compare(userPassword, this.password)

  return isMatch
}

export const userModel = mongoose.model('User', userSchema)
