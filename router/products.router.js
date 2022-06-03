const { Router } = require("express");
const {
  filterController,
  getProductByIdController,
  setProductController,
  updateProductController,
  patchProductController,
  deleteProductController,
  listaProductos,
} = require("../controller/products.controller");
const validatorHandler = require("../middleware/validatorHandler");
const {
  createProductSchema,
  getProductSchema,
  uppdateProductSchema,
} = require("../schema/products");

const router = Router();

router.get("/", listaProductos);

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

router.delete(
  "/:id",
  validatorHandler(getProductSchema, "params"),
  deleteProductController
);

module.exports = router;
