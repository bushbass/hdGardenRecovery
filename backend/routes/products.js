const express = require('express');
const cors = require('cors');
const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
  resetAllQuantities,
} = require('../controllers/productController');
const router = express.Router();

// get all products
router.get('/', getProducts);

// update RESET all quantities to zero
router.get('/reset', resetAllQuantities);

// get one product
router.get('/:id', getProduct);

// POST create a new product
router.post('/', createProduct);

// DELETE a product
router.delete('/:id', deleteProduct);

// UPDATE a product
router.put('/:id', updateProduct);

module.exports = router;
