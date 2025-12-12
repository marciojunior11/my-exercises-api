import ModalidadeController from "@/controllers/modalidade.controller";
import { Router } from "express";

const router = Router();

const controller = new ModalidadeController();

router.get("/modalidades", controller.getModalidades);

export default router;