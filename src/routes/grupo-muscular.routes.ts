import GrupoMuscularController from "@/controllers/grupo-muscular.controller";
import { Router } from "express";

const router = Router();

const controller = new GrupoMuscularController();

router.get("/grupos-musculares", controller.getGruposMusculares);

export default router;