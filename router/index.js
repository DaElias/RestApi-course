const { Router } = require("express");
const productsRouter = require("./products.router");
const userRouter = require("./users.router");
const categoriasRouter = require("./categorisys.router");

const RouterApi = (app) => {
  const router = Router();
  app.use("/api", router);
  router.use("/products", productsRouter);
  router.use("/users", userRouter);
  router.use("/categories", categoriasRouter);
};

module.exports = { RouterApi };
