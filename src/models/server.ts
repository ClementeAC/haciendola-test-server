import express, { Application } from "express";
import productRoutes from "../routes/product";
import userRoutes from "../routes/user";
import { Product } from "./product";
import { User } from "./user";
import cors from "cors";

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3001";
    this.listen();
    this.middlewares();
    this.routes();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }

  routes() {
    this.app.use("/api/products", productRoutes);
    this.app.use("/api/users", userRoutes);
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  async dbConnect() {
    try {
      await Product.sync();
      await User.sync();
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  }
}

export default Server;
