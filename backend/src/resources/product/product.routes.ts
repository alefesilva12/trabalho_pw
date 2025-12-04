import { Router } from "express";
import { productController } from "./product.controller";
import { validate } from "../../middlewares/validate";
import { createProductSchema, updateProductSchema } from "./product.schema";

const router = Router();

router.get("/product", productController.list);
router.get("/product/:id", productController.get);
router.post(
  "/product",
  validate(createProductSchema),
  productController.create,
);

router.put(
  "/product/:id",
  validate(updateProductSchema),
  productController.update,
);

router.delete("/product/:id", productController.remove);

export default router;
