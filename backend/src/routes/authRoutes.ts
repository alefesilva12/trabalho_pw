import { Router } from "express";
import { loginController } from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { meController } from "../controllers/meController";
import testRouter from "./routes/test";
app.use(testRouter);
const router = Router();

router.post("/login", loginController);
router.get("/me", authMiddleware, meController);

export default router;
