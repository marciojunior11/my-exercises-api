import GrupoMuscularRepository from "@/repositories/grupo-muscular.repository";
import { Request, Response } from "express";

const repository = new GrupoMuscularRepository();

export default class GrupoMuscularController {
    getGruposMusculares = async (req: Request, res: Response) => {
        const gruposMusculares = await repository.findMany();

        return res.json(gruposMusculares);
    };
}