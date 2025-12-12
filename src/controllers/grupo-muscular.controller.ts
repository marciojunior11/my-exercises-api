import GrupoMuscularService from "@/services/grupo-muscular.service";
import { Request, Response } from "express";

const service = new GrupoMuscularService();

export default class GrupoMuscularController {
    public getGruposMusculares = async (req: Request, res: Response) => {
        const gruposMusculares = await service.getGruposMusculares();

        return res.json(gruposMusculares);
    };
}