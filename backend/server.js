const express = require('express')
require('dotenv').config()

const productRoutes = require('./routes/products')
const app = express()
const mongoose = require('mongoose')

const cors = require('cors')

app.use(cors())

// middleware

app.use(express.json())
// looks for 'body' and can attach it to req object
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/products', productRoutes)

// connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`connected to db and listening on port ${PORT} `)
    })
  })
  .catch((error) => {
    console.log(error)
  })

const PORT = process.env.PORT || 4000
