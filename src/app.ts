import express from "express";
import { CreateEquipamentoRouter } from "./use-cases/create-equipamento/router";
import { router } from "./routes";

const app = express();

app.use(express.json());

app.use("/api", router);

export { app };