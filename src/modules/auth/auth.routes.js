import { Router } from 'express'
import { validate } from '../../middlewares/validate.js'
import { asyncWrapper } from '../../middlewares/asyncWrapper.js'
import { login, profile } from './auth.controller.js'
import { loginSchema } from './auth.validation.js'
import { isAuthenticated } from '../../middlewares/isAuthenticated.js'


const authRoutes = Router()

authRoutes.post('/login', validate(loginSchema), asyncWrapper(login))
authRoutes.get('/profile', isAuthenticated, asyncWrapper(profile))

export { authRoutes }

