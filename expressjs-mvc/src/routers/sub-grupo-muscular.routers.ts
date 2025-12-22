import { SubGrupoMuscularController } from "@/controllers";
import { Router } from "express";

export const SubGrupoMuscularRouter = () => {
    const router = Router();

    const controller = new SubGrupoMuscularController();

    router.get("/sub-grupos-musculares", controller.getSubGruposMusculares);

    return router;
};