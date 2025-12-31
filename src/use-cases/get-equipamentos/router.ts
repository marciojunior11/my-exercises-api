import { Router } from "express";
import { container } from "tsyringe";
import { GetEquipamentosController } from "./controller";

const router = Router();
const controller = container.resolve(GetEquipamentosController);

router.get("/equipamentos", controller.handle);

export { router as GetEquipamentosRouter };