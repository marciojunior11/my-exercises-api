import EquipamentoController from "@/controllers/equipamento.controller";
import { Router } from "express";

const router = Router();

const controller = new EquipamentoController();

router.get("/equipamentos", controller.getEquipamentos);
router.post("/equipamentos", controller.createEquipamento);
router.put("/equipamentos", controller.createEquipamento);
router.delete("/equipamentos", controller.createEquipamento);

export default router;