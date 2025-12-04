import { Router } from "express";
import { purchaseController } from "./purchase.controller";
import { isAuthenticated } from "../../middlewares/isAuthenticated";
import { isAdmin } from "../../middlewares/isAdmin";

const router = Router();

router.post("/purchase", isAuthenticated, purchaseController.create);
router.get("/purchase", isAuthenticated, purchaseController.listUser);
router.get("/purchase/:id", isAuthenticated, purchaseController.findById);

// admin
router.get(
  "/purchase-admin",
  isAuthenticated,
  isAdmin,
  purchaseController.listAll
);

export default router;
