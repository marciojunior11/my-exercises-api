import express, { Request, Response } from "express";
import { 
    EquipamentoRouter,
    GrupoMuscularRouter,
    ModalidadeRouter,
    SubGrupoMuscularRouter
} from "./routers";
import { errorHandler } from "./middlewares/error-handler";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("HELLO WORLD!");
});

app.use("/api", EquipamentoRouter);
app.use("/api", GrupoMuscularRouter);
app.use("/api", ModalidadeRouter);
app.use("/api", SubGrupoMuscularRouter);

app.use(errorHandler)

app.listen(3000, () => {
    console.info("ESCUTANDO NA PORTA 3000!");
});