import { Router } from "express";
import { container } from "@/lib/tsyringe";
import { UpdateEquipamentoController } from "./controller";

const router = Router();
const controller = container.resolve(UpdateEquipamentoController);

router.patch("/equipamentos/:id", controller.handle);

export { router as UpdateEquipamentoRouter };