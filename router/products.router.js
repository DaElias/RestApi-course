import { Router } from "express";
import {
  generarProductos,
  filterController,
  getProductByIdController,
  setProductController,
  updateProductController,
  patchProductController,
  deleteProductController,
} from "../controller/products.controller";
import validatorHandler from "../middleware/validatorHandler";
import {
  createProductSchema,
  getProductSchema,
  uppdateProductSchema,
} from "../schema/products";

const router = Router();

router.get("/", generarProductos);

router.get("/filter", filterController);

router.get(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  getProductByIdController
);

router.post("/", setProductController);

router.put(
  "/",
  validatorHandler(uppdateProductSchema, "body"),
  updateProductController
);

router.patch(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  validatorHandler(createProductSchema, "body"),
  patchProductController
);

router.delete("/:id", deleteProductController);

export default router;
