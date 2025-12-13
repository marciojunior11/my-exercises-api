import SubGrupoMuscularController from "@/controllers/sub-grupo-muscular.controller";
import { Router } from "express";

const router = Router();

const controller = new SubGrupoMuscularController();

router.get("/sub-grupos-musculares", controller.getSubGruposMusculares);

export default router;