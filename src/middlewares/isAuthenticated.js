import { verify } from 'jsonwebtoken'

export const isAuthenticated = (req, res, next) => {
    const authToken = req.headers.authorization

    if (!authToken) res.status(401).json({ message: 'Not authorized' })

    const [bearer, token] = authToken.split(' ')

    if (!bearer === 'Bearer')
        res.status(401).json({ message: 'Badly formatted token' })

    try {
        const { sub } = verify(token, process.env.JWT_SECRET)

        req.user_id = sub

        return next()
    } catch (err) {
        return res.status(401).json({
            message: 'Not authorized'
        })
    }
}

export const isAuthenticatedAdmin = (req, res, next) => {
    const authToken = req.headers.authorization

    if (!authToken) res.status(401).json({ message: 'Not authorized' })

    const [bearer, token] = authToken.split(' ')

    if (!bearer === 'Bearer')
        res.status(401).json({ message: 'Badly formatted token' })

    try {
        const { sub } = verify(token, process.env.JWT_SECRET)

        req.user_id = sub

        return next()
    } catch (err) {
        return res.status(401).json({
            message: 'Not authorized'
        })
    }
}


