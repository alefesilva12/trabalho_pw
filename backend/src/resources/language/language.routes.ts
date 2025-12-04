import { Router } from "express";
import { languageController } from "./language.controller";

const router = Router();

router.get("/language/change", languageController.change);

export default router;