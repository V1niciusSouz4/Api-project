import { Router } from 'express'
import { createShopCar, shopById, shops, updateShopCar } from './shopcar.controller.js'
import { validate } from '../../middlewares/validate.js'
import { asyncWrapper } from '../../middlewares/asyncWrapper.js'
import { newProduct } from './shopcar.validation.js'
import { isAuthenticated } from '../../middlewares/isAuthenticated.js'


const shopRoutes = Router()

shopRoutes.get('/list', isAuthenticated, asyncWrapper(shops))
shopRoutes.get('/:id', isAuthenticated, asyncWrapper(shopById))
shopRoutes.post('/add/:id', asyncWrapper(createShopCar))
shopRoutes.put('/:id', isAuthenticated, validate(newProduct), asyncWrapper(updateShopCar))

export { shopRoutes }
