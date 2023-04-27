import { Router } from 'express'
import { create, update, index, indexById } from './user.controller.js'
import { validate } from '../../middlewares/validate.js'
import { asyncWrapper } from '../../middlewares/asyncWrapper.js'
import { newUser, updated } from './user.validation.js'
import { isAuthenticated } from '../../middlewares/isAuthenticated.js'
import { admin, adminGlobal } from '../../middlewares/admin.validation.js'

const userRoutes = Router()

userRoutes.get('/', isAuthenticated, admin, asyncWrapper(index))
userRoutes.get('/:id', isAuthenticated, admin, asyncWrapper(indexById))
userRoutes.post('/', isAuthenticated, adminGlobal, validate(newUser),  asyncWrapper(create))
userRoutes.put('/:id', isAuthenticated, adminGlobal, validate(updated), asyncWrapper(update))

export { userRoutes }
