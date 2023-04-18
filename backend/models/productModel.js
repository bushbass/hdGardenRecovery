const mongoose = require('mongoose')

const Schema = mongoose.Schema

// schema defines the structure
const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

// model allows us to interact

module.exports = mongoose.model('Product', productSchema)
