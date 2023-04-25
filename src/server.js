import 'dotenv/config'
import express, { json, urlencoded } from 'express'
import cors from 'cors'

import { connectMongoDB } from './config/db.js'
import { errorHandler } from './middlewares/errorHandler.js'
import { AppError } from './utils/appError.js'
import { routes } from './routes.js'

const app = express()
const port = process.env.PORT || 3000

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(cors())

connectMongoDB()

app.use('/api', routes)

app.use((req,res,next) => {
    return res.status(404).json({message: "Source not found"})
})

app.use(errorHandler)

app.listen(port, () => console.log('Server online'))