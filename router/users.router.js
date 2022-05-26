import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  }
  res.json({ mgs: "no hay querys" });
});

export default router;
