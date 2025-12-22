import { SubGrupoMuscularController } from "@/controllers";
import { Router } from "express";

const router = Router();

const controller = new SubGrupoMuscularController();

router.get("/sub-grupos-musculares", controller.getSubGruposMusculares);

export default router;