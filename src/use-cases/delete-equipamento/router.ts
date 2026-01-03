import { Router } from "express";
import { container } from "@/lib/tsyringe";
import { DeleteEquipamentoController } from "./controller";

const router = Router();
const controller = container.resolve(DeleteEquipamentoController);

router.delete("/equipamentos/:id", controller.handle);

export { router as DeleteEquipamentoRouter };