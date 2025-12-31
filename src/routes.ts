import { Router } from "express";
import { CreateEquipamentoRouter } from "./use-cases/create-equipamento/router";
import { apiErrorHandler, internalServerErrorHandler } from "./handlers/error-handler";
import { GetEquipamentosRouter } from "./use-cases/get-equipamentos/router";

const router = Router();

router.use(CreateEquipamentoRouter);
router.use(GetEquipamentosRouter);

router.use(
    apiErrorHandler,
    internalServerErrorHandler
);

export { router };

