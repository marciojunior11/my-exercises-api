import { Router } from "express";
import { CreateEquipamentoRouter } from "./use-cases/create-equipamento/router";

const router = Router();

router.use(CreateEquipamentoRouter);

export { router };

