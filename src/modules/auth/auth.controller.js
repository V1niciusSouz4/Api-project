import { userModel } from '../users/user.model.js'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {

    let user = await userModel.findOne({ email: req.body.email })

    if (!user) return res.status(404).json({ message: 'User does not exists' })

    let isMatch = await user.matchPasswords(req.body.password)
    if (!isMatch) return res.status(401).json({
        message: 'Invalid username/password'
    })
    let token = jwt.sign(
        { sub: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }
    )

    const { password, __v, secret, ...exposedUser } = user.toObject()

    return res.json({
        data: {
            token,
            user: exposedUser
        }
    })
}

export const profile = async (req, res) => {
    let user = await userModel.findOne({ _id: req.user_id })

    const { password, __v, secret, ...exposedUser } = user.toObject()

    return res.json({ data: { user: exposedUser } })
}




