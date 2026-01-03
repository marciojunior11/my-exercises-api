import { Router } from "express";
import { CreateEquipamentoRouter } from "./use-cases/create-equipamento/router";
import { apiErrorHandler, internalServerErrorHandler } from "./handlers/error-handler";
import { GetEquipamentosRouter } from "./use-cases/get-equipamentos/router";
import { UpdateEquipamentoRouter } from "./use-cases/update-equipamento/router";
import { DeleteEquipamentoRouter } from "./use-cases/delete-equipamento/router";
import { GetEquipamentoRouter } from "./use-cases/get-equipamento/router";

const router = Router();

router.use(GetEquipamentoRouter);
router.use(GetEquipamentosRouter);
router.use(CreateEquipamentoRouter);
router.use(UpdateEquipamentoRouter);
router.use(DeleteEquipamentoRouter);

router.use(
    apiErrorHandler,
    internalServerErrorHandler
);

export { router };

