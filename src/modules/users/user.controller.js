import { userModel } from './user.model.js'

export const index = async (req, res) => {
  let users = await userModel.find({}, { password: 0, __v: 0 })
  return res.json({ data: { users } })
}

export const indexById = async (req, res) => {
  const { id } = req.params

  if (!id)
    return res.status(400).json({ message: 'Id Wrong' })

  const client = await userModel.findById({ _id: id }, { password: 0, __v: 0 })

  return res.json(client)
}

export const create = async (req, res) => {
  const image = `${process.env.URL_IMAGE}/${req.body.photo}`

  const getUserDB = await userModel.findOne({ email: req.body.email })

  if (getUserDB) return res.status(400).json({ message: "user duplicated" })

  let data = await userModel.create({ ...req.body, admin: req.body.email.includes("@itlean")? true:false, photo: image })

  const { password, __v, ...user } = data.toObject()

  return res.status(201).json({ message: 'User created success', data: user })
}

export const update = async (req, res) => {

  let user = await userModel.findById(req.params.id)

  if(req.body.email == user.email && req.body.name == user.name)
  return res.status(400).json({ message: 'No informations changed'})

  if (!user)

    return res.status(400).json({ message: 'User not found' })

  Object.assign(user, req.body)
  await user.save()
  return res.json({ message: 'Record updated' })
}
