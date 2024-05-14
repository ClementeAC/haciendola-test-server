"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.get("/", validate_token_1.default, product_1.getProducts);
router.get("/:id", validate_token_1.default, product_1.getProductById);
router.post("/", validate_token_1.default, product_1.createProduct);
router.put("/:id", validate_token_1.default, product_1.updateProduct);
router.delete("/:id", validate_token_1.default, product_1.deleteProduct);
exports.default = router;
