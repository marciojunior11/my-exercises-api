import { EquipamentoController } from "@/controllers";
import { Router } from "express";

export const EquipamentoRouter = () => {
    const router = Router();

    const controller = new EquipamentoController();

    router.get("/equipamentos", controller.getEquipamentos);
    router.post("/equipamentos", controller.createEquipamento);
    router.patch("/equipamentos/:id", controller.updateEquipamento);
    router.delete("/equipamentos/:id", controller.deleteEquipamento);

    return router;
};