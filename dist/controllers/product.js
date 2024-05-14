"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const product_1 = require("../models/product");
// Get all products
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listProducts = yield product_1.Product.findAll({
        order: [["id", "ASC"]],
    });
    res.json(listProducts);
});
exports.getProducts = getProducts;
// Get a single product by ID
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    const product = yield product_1.Product.findByPk(productId);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: "Product not found" });
    }
});
exports.getProductById = getProductById;
// Create a new product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const newProduct = yield product_1.Product.create(productData);
        res.status(201).json(newProduct);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to create product" });
    }
});
exports.createProduct = createProduct;
// Update a product by ID
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    const updatedData = req.body;
    try {
        const product = yield product_1.Product.findByPk(productId);
        if (product) {
            yield product.update(updatedData);
            res.json(product);
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update product" });
    }
});
exports.updateProduct = updateProduct;
// Delete a product by ID
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.id;
    try {
        const product = yield product_1.Product.findByPk(productId);
        if (product) {
            yield product.destroy();
            res.json({ message: "Product deleted" });
        }
        else {
            res.status(404).json({ message: "Product not found" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to delete product" });
    }
});
exports.deleteProduct = deleteProduct;
