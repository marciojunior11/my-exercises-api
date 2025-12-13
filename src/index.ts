import express from "express";
import { Request, Response } from "express";
import equipamentoRoutes from "./routes/equipamento.routes";
import grupoMuscularRoutes from "./routes/grupo-muscular.routes";
import mnodalidadeRoutes from "./routes/modalidade.routes";
import subGruposMuscularesRoutes from "./routes/sub-grupo-muscular.routes";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("HELLO WORLD!");
});

app.use("/api", equipamentoRoutes);
app.use("/api", grupoMuscularRoutes);
app.use("/api", mnodalidadeRoutes);
app.use("/api", subGruposMuscularesRoutes);

app.listen(3000, () => {
    console.log("ESCUTANDO NA PORTA 3000!");
});