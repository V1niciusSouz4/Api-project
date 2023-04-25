import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const { Schema } = mongoose

//-----------------------User model
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
    admin:{
      type: Boolean,
      undefined: false
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

  //Caso a senha n tenha sido modificada, apenas segue
  if (!user.isModified('password')) return next()

  //O 10 é Sal
  let hashedPassword = await bcrypt.hash(user.password, 10)

  user.password = hashedPassword

  next()
})

userSchema.methods.matchPasswords = async function (userPassword) {
  //Compara o valor recebido com o valor do objeto userSchema
  const isMatch = await bcrypt.compare(userPassword, this.password)

  return isMatch
}

export const userModel = mongoose.model('User', userSchema)
