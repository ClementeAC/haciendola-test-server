import { Sequelize } from "sequelize";

const sequelize = new Sequelize("haciendola", "postgres", "admin", {
  host: "localhost",
  port: 5433,
  dialect: "postgres",
});

export default sequelize;
