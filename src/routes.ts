import { Express } from "express";
import { CreateEquipamentoRouter } from "./use-cases/create-equipamento/router";

const registerRoutes = (app: Express) => {
    app.use("/api", CreateEquipamentoRouter);
};

export { registerRoutes };