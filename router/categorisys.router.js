import { Router } from "express";

const router = Router();

router.get("/:categoryID/products/:productID", (req, res) => {
  const { categoryID, productID } = req.params;
  res.json({
    categoryID,
    productID,
    data: [],
  });
});

export default router;
