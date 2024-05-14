import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const Product = sequelize.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  handle: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.TEXT,
  },
  sku: {
    type: DataTypes.BIGINT,
  },
  grams: {
    type: DataTypes.DECIMAL(10, 2),
  },
  stock: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  comparePrice: {
    type: DataTypes.INTEGER,
  },
  barcode: {
    type: DataTypes.BIGINT,
  },
});
