import { Router } from "express";
import { container } from "@/lib/tsyringe";
import { GetEquipamentoController } from "./controller";

const router = Router();
const controller = container.resolve(GetEquipamentoController);

router.get("/equipamentos/:id", controller.handle);

export { router as GetEquipamentoRouter }