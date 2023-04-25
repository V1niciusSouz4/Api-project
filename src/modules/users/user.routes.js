import { Router } from 'express'
import { create, update, index, indexById } from './user.controller.js'
import { validate } from '../../middlewares/validate.js'
import { asyncWrapper } from '../../middlewares/asyncWrapper.js'
import { newUser } from './user.validation.js'
import { isAuthenticated } from '../../middlewares/isAuthenticated.js'
import { validateTokenAdmin } from '../../middlewares/admin.validation.js'
import { validateAdmin } from '../../middlewares/admin.validation.js'

const userRoutes = Router()

userRoutes.get('/', isAuthenticated, validateTokenAdmin, asyncWrapper(index))
userRoutes.get('/:id', isAuthenticated, validateTokenAdmin, asyncWrapper(indexById))
userRoutes.post('/add', validate(newUser), validateAdmin, asyncWrapper(create))
userRoutes.put('/:id', isAuthenticated, validate(newUser), validateTokenAdmin, asyncWrapper(update))

export { userRoutes }
