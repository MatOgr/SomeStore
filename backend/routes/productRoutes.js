const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  deleteProductById,
} = require("../controller/productController");

// @desc    GET all products
// @route   GET /api/products
// @access Public
router.get("/", getAllProducts);

// @desc    GET a product
// @route   GET /api/products/:id
// @access Public
router.get("/:id", getProductById);

// @desc    DELETE a product
// @route   DELETE /api/products/:id
// @access Public
router.delete("/:id", deleteProductById);

module.exports = router;
