import { Router } from 'express'
import { userRoutes } from './modules/users/user.routes.js'
import { productRoutes } from './modules/products/products.routes.js'
import { authRoutes } from './modules/auth/auth.routes.js'
import { fileRouts } from './modules/files/files.routes.js'
import { shopRoutes } from './modules/shopcar/shopcar.routes.js'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/auth', authRoutes)
routes.use('/file', fileRouts)
routes.use('/products', productRoutes)
routes.use('/shopCar', shopRoutes)


export { routes }
