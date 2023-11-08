import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import 'express-async-errors'

import { MONGODB_URI, PORT } from './utils/config'
import { unknownEndpoint, errorHandler } from './utils/middleware'

import booksRouter from './controllers/books'

const app = express()

app.use(morgan('dev'))

mongoose.set('strictQuery', false)

console.log('connecting to', MONGODB_URI)

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('connected to MongoDB'))
  .catch((error) =>
    console.error('error connecting to MongoDB:', error.message)
  )

app.use(express.json())

app.use('/api/books', booksRouter)

app.use(unknownEndpoint)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})
