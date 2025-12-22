import { GrupoMuscularController } from "@/controllers";
import { Router } from "express";

const router = Router();

const controller = new GrupoMuscularController();

router.get("/grupos-musculares", controller.getGruposMusculares);

export default router;