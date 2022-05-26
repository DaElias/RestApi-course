import { Router } from "express";
import productsRouter from "./products.router";
import userRouter from "./users.router";
import categoriasRouter from "./categorisys.router";

const RouterApi = (app) => {
  const router = Router();
  app.use("/api", router);
  router.use("/products", productsRouter);
  router.use("/users", userRouter);
  router.use("/categories", categoriasRouter);
};

export { RouterApi };
