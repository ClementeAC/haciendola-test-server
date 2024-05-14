"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Product = connection_1.default.define("product", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    handle: {
        type: sequelize_1.DataTypes.STRING,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
    },
    sku: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    grams: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    comparePrice: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    barcode: {
        type: sequelize_1.DataTypes.BIGINT,
    },
});
