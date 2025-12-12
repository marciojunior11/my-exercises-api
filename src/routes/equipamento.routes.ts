import EquipamentoController from "@/controllers/equipamento.controller";
import { Router } from "express";

const router = Router();

const controller = new EquipamentoController();

router.get("/equipamentos", controller.getEquipamentos);

export default router;