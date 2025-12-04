import { Router } from "express";
import { authController } from "./auth.controller";

import { validate } from "../../middlewares/validate";
import { loginSchema } from "./auth.schema";

const router = Router();

// LOGIN (com validação de email/senha)
router.post("/login", validate(loginSchema), authController.login);

// LOGOUT
router.post("/logout", authController.logout);

export default router;
