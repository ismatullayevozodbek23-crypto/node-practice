const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/products', productController.getAllProducts);
router.get('/products/available', productController.getAvailableProducts);
router.post('/products', productController.addProduct);

module.exports = router;
