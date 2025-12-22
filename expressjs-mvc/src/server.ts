import express, { Request, Response } from "express";
import {
    EquipamentoRouter,
    GrupoMuscularRouter,
    ModalidadeRouter,
    SubGrupoMuscularRouter
} from "./routers";

const app = express();

export const ConfigureServer = () => {
    app.use(express.json());

    return app;
};

export const RegisterRoutes = () => {
    app.get("/", (req: Request, res: Response) => {
        res.send("HELLO WORLD!");
    });

    app.use("/api", EquipamentoRouter);
    app.use("/api", GrupoMuscularRouter);
    app.use("/api", ModalidadeRouter);
    app.use("/api", SubGrupoMuscularRouter);

    return app;
};

export const StartServer = () => app.listen(3000, () => {
    console.log("ESCUTANDO NA PORTA 3000!");

    return app;
});