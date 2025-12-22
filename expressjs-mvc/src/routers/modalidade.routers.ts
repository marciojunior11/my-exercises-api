import { ModalidadeController } from "@/controllers";
import { Router } from "express";

export const ModalidadeRouter = () => {
    const router = Router();

    const controller = new ModalidadeController();

    router.get("/modalidades", controller.getModalidades);

    return router
};