import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product";
import validateToken from "./validate-token";

const router = Router();

router.get("/", validateToken, getProducts);
router.get("/:id", validateToken, getProductById);
router.post("/", validateToken, createProduct);
router.put("/:id", validateToken, updateProduct);
router.delete("/:id", validateToken, deleteProduct);

export default router;
