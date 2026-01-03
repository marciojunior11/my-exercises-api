import { Router } from "express";
import { container } from "@/lib/tsyringe";
import { CreateEquipamentoController } from "./controller";

const router = Router();
const controller = container.resolve(CreateEquipamentoController);

router.post("/equipamentos", controller.handle);

export { router as CreateEquipamentoRouter };