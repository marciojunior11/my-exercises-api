import { GrupoMuscularController } from "@/controllers";
import { Router } from "express";

export const GrupoMuscularRouter = () => {
    const router = Router();

    const controller = new GrupoMuscularController();

    router.get("/grupos-musculares", controller.getGruposMusculares);

    return router;
};