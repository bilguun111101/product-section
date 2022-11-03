const { getProductsData, getProductData, addProductData } = require("../Controller/products");
const express = require("express");
const router = express.Router();

router.get("/", getProductsData);
router.post("/", addProductData);
router.get("/:id", getProductData);

module.exports = router;