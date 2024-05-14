import { Request, Response } from "express";
import { Product } from "../models/product";

// Get all products
export const getProducts = async (req: Request, res: Response) => {
  const listProducts = await Product.findAll({
    order: [["id", "ASC"]],
  });
  res.json(listProducts);
};

// Get a single product by ID
export const getProductById = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const product = await Product.findByPk(productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
};

// Create a new product
export const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const newProduct = await Product.create(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to create product" });
  }
};

// Update a product by ID
export const updateProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;
  const updatedData = req.body;

  try {
    const product = await Product.findByPk(productId);

    if (product) {
      await product.update(updatedData);
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update product" });
  }
};

// Delete a product by ID
export const deleteProduct = async (req: Request, res: Response) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByPk(productId);

    if (product) {
      await product.destroy();
      res.json({ message: "Product deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product" });
  }
};
