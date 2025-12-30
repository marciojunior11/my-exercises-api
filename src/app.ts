import express from "express";
import { CreateEquipamentoRouter } from "./use-cases/create-equipamento/router";

const app = express();

app.use(express.json());

app.use("/api", CreateEquipamentoRouter);

export { app };